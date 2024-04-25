Left join : Left join işlemi, ilk tablodaki tüm kayıtları ve ikinci tablodaki eşleşen kayıtları getirir. Eğer ikinci tabloda eşleşen kayıt yoksa, sonuç olarak NULL değeri döndürür.
Right join : Right join işlemi, ilk tablodaki tüm kayıtları ve ikinci tablodaki eşleşen kayıtları getirir. Eğer ikinci tabloda eşleşen kayıt yoksa, sonuç olarak NULL değeri döndürür.
İnner join : Inner join işlemi, her iki tablodaki eşleşen kayıtları getirir ve eşleşmeyen kayıtları dışarıda bırakır.
Full Join : Full join işlemi, her iki tablodaki tüm kayıtları getirir ve eşleşen kayıtları birleştirir. Eğer bir tabloda eşleşen kayıt yoksa, o tablodaki diğer kayıtlar NULL değeri ile gösterilir.
Self Join : Aynı tablo içinde farklı satırları birleştirmek için kullanılan bir join işlemidir.

create table filmler (
film_id int,
film_name varchar(30), 
category varchar(30) );
insert into filmler values (1, 'Eyvah Eyvah', 'Komedi');
insert into filmler values (2, 'Kurtlar Vadisi', 'Aksiyon');
insert into filmler values (3, 'Eltilerin Savasi', 'Komedi');
insert into filmler values (4, 'Aile Arasinda', 'Komedi');
insert into filmler values (5, 'GORA', 'Bilim Kurgu'); 
insert into filmler values (6, 'Organize Isler', 'Komedi');
insert into filmler values (7, 'Babam ve Oglum', 'Dram');
create table aktorler (
id int,
actor_name varchar(30),
film_id int
);

insert into aktorler values (1, 'Ata Demirer', 1); 
insert into aktorler values (2, 'Necati Sasmaz', 2);
insert into aktorler values (3, 'Gupse Ozay', 3);
insert into aktorler values (4, 'Engin Gunaydin', 4);
insert into aktorler values (5, 'Cem Yilmaz', 5);

select * from filmler;
--Soru1 Tüm film_namel leri, kategorilerini ve 
--filmlerde oynayan aktor_name leri listeleyin
select film_name,category,actor_name from filmler as A left join
aktorler as B
on A.film_id=B.film_id;

select film_name,category,actor_name from aktorler as B  right join
filmler as A
on A.film_id=B.film_id;

--Soru 2: tüm actor_name leri ve film name leri listeleyiniz
select actor_name,film_name from aktorler as A
left join filmler as B
on A.film_id=B.film_id;

select actor_name,film_name from filmler as B
right join aktorler as A
on A.film_id=B.film_id;

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50)
);

INSERT INTO Customers (customer_id, name, email)
VALUES (1, 'Ali', 'ali@mail.com'),
       (2, 'Ayşe', 'ayse@mail.com'),
       (3, 'Fatih', 'fatih@mail.com');
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product VARCHAR(50),
    price DECIMAL(8,2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);
INSERT INTO Orders (order_id, customer_id, product, price)
VALUES (101, 1, 'Laptop', 2500.00),
       (102, 1, 'Printer', 500.00),
       (103, 2, 'Tablet', 1200.00),
       (104, 3, 'Phone', 1500.00),
       (105, 3, 'Camera', 2000.00);
	   
select * from Customers	   

--Soru customer name o isme ait product ve price ı 
--inner join kullanarak birleştiriniz
select name,product, price from Customers as A
inner join Orders as B
on A.customer_id=B.customer_id;

CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    manager_id INT
);

INSERT INTO Employees (employee_id, name, department, manager_id)
VALUES (1, 'Ali', 'IT', 2),
       (2, 'Ayşe', 'IT', NULL),
       (3, 'Fatih', 'Marketing', 4),
       (4, 'Mehmet', 'Marketing', NULL),
       (5, 'Elif', 'DEV', 1);
Soru : inner join kullanarak emloyee_name ve manager_name leri gösteriniz
select A.name as Employee_name, B.name as manager_name
from Employees as A
inner join Employees as B
on A.manager_id=B.employee_id;

delete from orders   
INSERT INTO Orders (order_id, customer_id, product, price)
VALUES (101, 1, 'Laptop', 2500.00),
       (102, 1, 'Printer', 500.00),
       (103, 2, 'Tablet', 1200.00),
       (104, NULL, 'Phone', 1500.00),
       (105, NULL, 'Camera', 2000.00
		
		
--Soru : customer name product ve price ların hepsini getiriniz
select A.name,B.product,B.price from Customers as A
full join Orders as B
on A.customer_id=B.customer_id;
CREATE TABLE ogrenciler 
(  
  id int, 
  isim varchar(50), 
  sehir varchar(50), 
  puan int,
  bolum varchar(20)
);
INSERT INTO ogrenciler VALUES(100, 'Ahmet Ümit', 'İstanbul', 546, 'Bilgisayar Müh.');
INSERT INTO ogrenciler VALUES(101, 'R.Nuri Güntekin', 'Antalya', 486, 'İşletme');
INSERT INTO ogrenciler VALUES(102, 'S.Faik Abasıyanık', 'Bursa', 554, 'Bilgisayar Müh.');
INSERT INTO ogrenciler VALUES(103, 'Yaşar Kemal', 'İstanbul', 501, 'Matematik');
INSERT INTO ogrenciler VALUES(104, 'Halide E. Adıvar', 'İzmir', 473, 'Psikoloji');
INSERT INTO ogrenciler VALUES(105, 'Nazan Bekiroğlu', 'İzmir', 432, 'Edebiyat');
INSERT INTO ogrenciler VALUES(106, 'Peyami Safa', 'Antalya', 535, 'Bilgisayar Müh.');
INSERT INTO ogrenciler VALUES(107, 'Sabahattin Ali', 'İstanbul', 492, 'Matematik');

--Soru 1 : İsimleri 'A' harfi ile başlayan öğrencilerin bilgilerini getirin.
select * from ogrenciler where isim  'A%';
		
--Soru 2:İsimleri 'i' harfi ile biten öğrencilerin bilgilerini getirin.
select * from ogrenciler where isim like '%i';

--Soru 3:İsimleri 'A' harfi ile başlayan ve 'Bilgisayar' bölümünde 
--okuyan öğrencilerin bilgilerini getirin.
select * from ogrenciler where isim like 'A%' and bolum='Bilgisayar Müh.';
		
--Soru 4: İsimleri 'n' harfi içeren öğrencilerin bilgilerini getirin.
select * from ogrenciler where isim like '%n%';
		
--Soru 5 :İsimleri 'A' harfi ile başlamayan öğrencilerin bilgilerini getirin.
select * from ogrenciler where isim not like 'A%';
		
--Soru 6 : İsimleri 5 karakterden daha uzun olan 
--öğrencilerin bilgilerini getirin.
select * from ogrenciler where length(isim)>5;	
		
--Soru 7:4.harfi a olan öğrenci bilgilerini getirin
select * from ogrenciler where isim like '___a%';
		
--Soru 8: İsminin içinde z veya k harfi geçen ogrenci bilgilerini getirin
select * from ogrenciler where isim ~ '[zk]';
		
--Soru 9: ismi Y veya N ile başlayan ogrenci bilgilerini getirin
select * from ogrenciler where isim ~ '^[YN]';		
		






