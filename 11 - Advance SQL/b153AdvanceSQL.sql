--Tek satirli yorum
/*
cok satirli yorum

*/

--*****************************************************
--*******DEĞİŞKEN TANIMLAMA****************************
--*****************************************************


do $$ --anonim bir block oldugunu gosterir
	--dolar : ozel karakterler oncesinde tirnak işareti kullanmamak icin

declare
	counter integer  :=1;
	first_name varchar(50) :='Ahmet';
	last_name varchar(50) :='Gok';
	payment numeric(4,2) :=20.5 ;   --1.si toplam rakam sayisini, 2.si de virgulden sonra kaç rakam olacagini verir

begin
	raise notice '% % % has been paid % USD',
			counter,
			first_name,
			last_name,
			payment;

end $$;

--Task 1:değişkenler oluşturarak ekrana Ahmet ve Mehmet beyler 120 TL ye 
--bilet aldılar. cümlesini ekrana basınız

do $$
declare
	first_person varchar(50) :='Ahmet';
	second_person varchar(50) :='Mehmet';
	payment numeric(3) :=120;

begin
	raise notice '% ve % beyler % TL ye bilet aldılar',
		first_person,
		second_person,
		payment;
end $$ ;

--*****************************************
-- ********  BEKLETME KOMUDU **************
--*****************************************
do $$
declare
	create_at time :=now();  --atama yapıldı

begin
	raise notice '%', create_at;
	perform pg_sleep(5);  --5 sn bekle
	raise notice '%',create_at;

end $$;

--*************************************************	
-- ******** TABLODAN DATA TİPİNİ KOPYALAMA ********
--*************************************************
do $$
declare
	film_title film.title%type;  --film tablosunda title headerındaki datatypeini secer

begin
	--1 id li filmin ismini getirelim
	select title
	from film
	into film_title
	where id=1;
	
	raise notice 'Film title with id : 1 %',film_title;

end $$;

--Task :1 id li filmin turunu yazdirin
do $$
declare
	film_type film.type%type;

begin 

	select type
	from film
	into film_type
	where id=1;
	
	raise notice 'Film type with id 1 : %',film_type;

end $$;

--Task : 1 id li filmin ismini ve turunu ekrana yazdiralim

--1.yol
do $$
declare
	film_title film.title%type;
	film_type film.type%type;

begin
	--1 id li filmin ismini getirelim
	select title
	from film
	into film_title
	where id=1;
	
	--1 id li filmin turunu getirelim
	select type
	from film
	into film_type
	where id=1;
	
	raise notice 'Film title with id 1 : % and type : %',
		film_title,
		film_type;

end $$;

--2.yol kisa olani
do $$
declare
	film_title film.title%type;
	film_type film.type%type;

begin

	select title,type
	from film
	into film_title,film_type
	where id=1;
	
	raise notice 'Film title with id 1 : % and type : %',
		film_title,
		film_type;

end $$;


--************************************************
-- ***************** ROW TYPE ********************
--************************************************

do $$
declare
	selected_actor actor%rowtype;
begin
	--id si 1 olan actoru getirelim
	select *
	from actor
	into selected_actor
	where id=1;
	
	raise notice 'The actors name is : % %',
		selected_actor.first_name,
		selected_actor.last_name;

end $$;

--******************************************
-- ******* Record Type *********************
--******************************************

do $$
declare
	rec record;

begin

	select id,title,type
	from film
	into rec
	where id=2;
	
	raise notice '% % %',rec.id, rec.title, rec.type;

end $$;


--******************************************
-- ******** İç İÇE BLOK ********************
--******************************************

--eger block icine block tanimlamasi yapilacaksa blocktaki begin ile end arasinda tanimalanir

do $$
<<outer_block>>
declare  --outer blok
	counter integer :=0;

begin 
	counter :=counter + 1;
	raise notice 'counter degerim : %',
		counter;
		
		declare --inner block
			counter integer :=0;
		
		begin --inner block
			counter :=counter + 10;
			raise notice 'iç blocktaki counter degerim : %',counter;
			raise notice 'dış blocktaki counter degerim : %',outer_block.counter; --label ile ulastik
		
		end;  --inner block sonu
		

end $$; --outer blok

--*************************************
-- ********** Constant ****************
--*************************************

--selling_price :=net_price*0,1;

do $$
declare
	rate constant numeric :=0.1;
	net_price numeric :=20.5;

begin

	raise notice 'Satış fiyatı : %', net_price * (1+rate);
	--rate :=0.2; constant bir ifadeyi degistirmeye calisirsak hata verir

end $$;

--constant bir ifadeye runtime de deger verilebilir mi
do $$
declare
	start_at constant time :=now();
begin

	raise notice 'blogun calisma zamani : %',start_at;
end $$;
--***************************************************
-- ******************** If Statement ****************
--***************************************************

--syntax
/*
if condition then 
	statement;
end if;

*/

-- Task : 0 id li filmi bulalım eğer yoksa ekrana uyarı yazısı verelim

do $$
declare
	selected_film film%rowtype;
	input_film_id film.id%type :=0;

begin 
	select * from film
	into selected_film
	where id = input_film_id;
	
	if not found then
		raise notice 'Girdiginiz id li film bulunamadi : %',input_film_id;
	end if;

end $$;

--*********************************************
-- ************** IF-THEN-ELSE ****************
--*********************************************

--syntax
/*
	if condition then
		statement;
	else
		alternative-statement;
	end if;

*/

--Task : 2 id li filmi bulalım, eğer yoksa ekrana uyarı yazalım, varsa da ismini ekrana yazalım

do $$
declare
	selected_film  film%rowtype;
	input_film_id film.id%type :=2;

begin
	select * from film
	into selected_film
	where id=input_film_id;
	
	
	if not found then
		raise notice 'Girmis oldugunuz id li film bulunamadi : %',input_film_id;
	else
		raise notice 'Filmin ismi : %',selected_film.title;
	end if;
end $$;


--Task : Eğer film tablosu bos degilse (count methodu ile) film tablosuna id, title
--degerlerini ayarlayarak yeni veri girisi yapan kodu yazalim

do $$
declare
	count_rows integer;

begin
	select count(*)
	from film
	into count_rows;
	
	if count_rows > 0 then
	insert into film (id,title)
	values (5,'Kara Şahin Düştü');
	raise notice 'Yeni film eklendi';
	
	else
		raise notice 'Film tablosu boş';
	end if;
	

end $$;

--*******************************************************
-- ************* IF-THEN-ELSE-IF ************************
--*******************************************************

--syntax 
/*
	if condition_1 then
		statement_1;
	elseif condition_2 then
		statement_2;
		...
	elseif condition_n then
		statement_n;
		
	else
		else_statement;
	end if;

*/

/* 	Task : 1 id li film varsa ; 
			süresi 50 dakikanın altında ise Kisa, 
			50<length<120 ise Orta, 
			length>120 ise Uzun yazalım

*/
do $$
declare
	v_film film%rowtype;
	len_description varchar(50);
begin
	select * from film
	into v_film
	where id=3;
	
	if not found then
		raise notice 'Film bulunamadi';
	else
		if v_film.length > 0 and v_film.length <=50 then
			len_description='Kisa';
			elseif v_film.length>50 and v_film.length <120 then
			len_description='Orta';
			elsif v_film.length >= 120 then
			len_description='Uzun';
			else 
			len_description='Tanimsiz';
		end if;
		
	raise notice '% filminin suresi : % ',v_film.title, len_description;
	end if;
			
end $$;

--***************************************************
-- ******** Case Statement **************************
--***************************************************

--syntax
/*
case search-expression
	when expression_1 {, expression_2...} then
	statements 
	{....}

else  
else_statements
end case;

*/


-- Task : Filmin türüne göre çocuklara uygun olup olmadığını ekrana yazalım

do $$
declare
	tur film.type%type;
	uyari varchar(50);

begin
	select type
	from film
	into tur
	where id=4;
	
	if found then
		case tur
			when 'Korku' then
				uyari='Çocuklar için uygun değil';
			when 'Macera' then
				uyari='Çocuklar için uygun';
			when 'Animasyon' then
				uyari='Çocuklar için tavsiye edilir';
			else 
				uyari='Tanimlanmadi';
		end case;
		raise notice '%',uyari;
	end if;


end $$;

--******************************************
--************** LOOP **********************
--******************************************

--syntax
/*
<<label>> --1.ornek
loop
	statement;
end loop;

--loopu sonlandırmak icin if yapisi kullanilabilir
<<label>>  2.ornek
loop
	statements;
	if condition then
	exit; --loop dan cikilmasini saglar
end loop;


--nested loop --3.ornek
<<outer>>
loop 
	statements;
	<<inner>>
	loop
	....
	exit --inner
	end loop --inner loop endi
exit;
end loop; --outer loop endi

*/

-- Task : Fibonacci serisinde, belli bir sıradaki sayıyı ekrana getirelim
--Fibonacci sayilari 1 1 2 3 5 8 13 21 ....
--n integer : 4;

do $$
declare
	n integer :=6;  --fibonacci serisinde n.sayiyi getir
	counter integer :=0; --0 dan basla istenen indise kadar git
	i integer :=0;  --kendinden onceki 2 sayidan 1.si
	j integer :=1;  --kendinden onceki 2 sayidan 2.si
	fib integer :=0; --ekrana yansiyacak sayi

begin
	if(n<1) then
		fib:=0;
	end if;
	
	loop
		exit when counter=n;
		counter:=counter + 1;
		select j,i+j into i,j; --j'yi i'ye, i+j'yi j' ye koy ---1,1,2,3,5,8...
	end loop;
	fib :=i;
	raise notice '%. siradaki Fibonacci Sayisi : %',n,fib;


end $$;

--Task 1 : Film tablosundaki film sayisi 10 dan az ise "Film sayisi az" yazdirin, 
--10 dan cok ise "Film sayisi yeterli" yazdiralim
do $$
declare
	sayi integer :=0;
begin
	select count(*)
	from film
	into sayi;
	
	if sayi<10 then
		raise notice 'Film sayisi 10 dan az';
		
	else
		raise notice 'Film sayisi yeterli';
	end if;
end $$;

-- Task 2: user_age isminde integer data turunde bir degisken tanimlayip default olarak bir deger verelim, 
--If yapisi ile girilen deger 18 den buyuk ise Access Granted, kucuk ise Access Denied yazdiralim 
do $$

declare
	user_age integer :=25;
	
begin
	if user_age>18 then
	raise notice 'Access Granted';
	end if;
	if user_age<18 then
	raise notice 'Access Denied';
	end if;

end $$;

-- (Odeb)Task 3: a ve b isimli integer turunde 2 degisken tanimlayip default degerlerini verelim, 
--eger a nin degeri b den buyukse "a , b den buyuktur" yazalim, tam tersi durum icin "b, a dan buyuktur" yazalim, 
--iki deger birbirine esit ise " a,  b'ye esittir" yazalim: 



--**************************************************
-- ************ WHILE LOOP *************************
--**************************************************

--syntax :

while condition loop
	statements;
end loop;

-- Task : 1 dan 4 e kadar counter degerlerini ekrana basalim

do $$
declare
	n integer :=4;
	counter integer :=0;
begin
	while counter<n loop
		counter=counter+1;
	raise notice '%',counter;
	end loop;

end $$;


-- Task : sayac isminde bir degisken olusturun ve dongu icinde sayaci birer artirin, 
--	her dongude sayacin degerini ekrana basin ve sayac degeri 5 e esit olunca donguden cikin

do $$
declare
	sayac integer :=0;
begin
	loop
		raise notice '%',sayac;
		sayac=sayac+1;
		exit when sayac =5;
	end loop;

end $$;

--***********************************************
-- **************  FOR LOOP *********************
--***********************************************
--syntax :
FOR loop_counter IN {reverse} FROM ..TO {by step} LOOP
	statement;
	END LOOP;

--Ornek (in)

do $$
begin
	for counter in 1..5 loop
		raise notice 'counter : %',counter;
	end loop;
end $$;

--Ekstra degisken yok ise declare yazilmayabilir

--Ornek (reverse)

do $$
declare
begin
	for counter in reverse 5..1 loop
		raise notice 'counter : %',counter;
	end loop;
end $$;

--Ornek (by)

do $$
begin
	for counter in 1..10 by 2 loop
		raise notice 'counter : %',counter;
	end loop;
end $$;

-- Task : 10 dan 20 ye kadar 2 ser 2 ser ekrana sayilari basalim : 


do $$
begin
	for counter in 10..20 by 2 loop
		raise notice 'counter : %',counter;
	end loop;
end $$;

--ornek : DB de for loop kullanimi
--syntax :
FOR target IN query loop --target hedef degisken targeta atanıyor
	statements
END LOOP;

-- Task : Filmleri suresine gore siraladigimizda en uzun 2 filmi 

DO $$
declare
 	f record;
begin
	for f in select title,length
		from film
		order by length desc
		limit 3
	loop
		raise notice '% % dakika',f.title,f.length;
	end loop;


end $$;

CREATE TABLE employees (
  employee_id serial PRIMARY KEY,
  full_name VARCHAR NOT NULL,
  manager_id INT
);

INSERT INTO employees (
  employee_id,
  full_name,
  manager_id
)
VALUES
  (1, 'M.S Dhoni', NULL),
  (2, 'Sachin Tendulkar', 1),
  (3, 'R. Sharma', 1),
  (4, 'S. Raina', 1),
  (5, 'B. Kumar', 1),
  (6, 'Y. Singh', 2),
  (7, 'Virender Sehwag ', 2),
  (8, 'Ajinkya Rahane', 2),
  (9, 'Shikhar Dhawan', 2),
  (10, 'Mohammed Shami', 3),
  (11, 'Shreyas Iyer', 3),
  (12, 'Mayank Agarwal', 3),
  (13, 'K. L. Rahul', 3),
  (14, 'Hardik Pandya', 4),
  (15, 'Dinesh Karthik', 4),
  (16, 'Jasprit Bumrah', 7),
  (17, 'Kuldeep Yadav', 7),
  (18, 'Yuzvendra Chahal', 8),
  (19, 'Rishabh Pant', 8),
  (20, 'Sanju Samson', 8);

 -- Task :  manager ID si en buyuk ilk 10 kisiyi ekrana yazalim 

do $$
declare
	f record;
begin
	for f in select full_name, manager_id
	from employees
	order by manager_id desc
	limit 10
	
	loop
		raise notice '% - % ',f.manager_id,f.full_name;
	end loop;

end $$;


--*****************************************
-- ***************** EXIT *****************
--*****************************************
--1.yol :
exit when counter > 10;

2.yol
if counter > 10 then
	exit;
end if;

--*****************************************
-- ************ CONTINUE ******************
--*****************************************

--Syntax :
continue {loop_label} {when condition}....--verilen condition saglandiginda gecer

-- Task : continue yapisi kullanarak 1 dahil 10 a kadar olan tek sayilari ekrana basalim

do $$
declare
	counter integer :=0;
begin
	loop
	counter:=counter+1;
	exit when counter >10;
	continue when mod(counter,2)=0;
	raise notice '%',counter;
	end loop;
end $$;

-- ********************************************************	
--  ********************* FUNCTION ***********************
-- ********************************************************

--syntax :
/*
create {or replace} function function_name(param_list)-- mevcut bir fonksiyon varsa replace kullanilmali
	returns return_type  --donen data turunu belirityorum
	language plpgsql    --kullanilan procedurel dil tanimalniyor Pl-Java ,Pl-Pyton
	as --yukarida fonksiyon tanimalndi as ile yapilacak islemlere gecilir
	
$$
declare
--variable declaration

begin
--logic
end $$;
	
*/

-- Film tablomuzdaki filmlerin sayisini getiren bir fonksiyon yazalim
create function get_film_count(len_from int, len_to int)
	returns int
	language plpgsql
	as
$$
declare
	film_count integer;
begin 
	select count(*)
	into film_count
	from film
	where length between len_from and len_to;
	
	return film_count;

end $$;

--yukaridaki fonksiyonu kullanmak icin
select get_film_count(40,120);





