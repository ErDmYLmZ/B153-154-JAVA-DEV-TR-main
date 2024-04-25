CREATE TABLE toptancilar
(
vergi_no int PRIMARY KEY,
sirket_ismi VARCHAR(40),
irtibat_ismi VARCHAR(30)
);

INSERT INTO toptancilar VALUES (201, 'IBM', 'Kadir Şen'); 
INSERT INTO toptancilar VALUES (202, 'Huawei', 'Çetin Hoş');
INSERT INTO toptancilar VALUES (203,'Erikson', 'Mehmet Gör'); 
INSERT INTO toptancilar VALUES (204, 'Apple', 'Adem Coş');
CREATE TABLE malzemeler  --> child
(
ted_vergino int,
malzeme_id int,
malzeme_isim VARCHAR(20),
musteri_isim VARCHAR(25),
CONSTRAINT FK FOREIGN KEY (ted_vergino) REFERENCES toptancilar (vergi_no) on delete cascade
);


INSERT INTO malzemeler VALUES (201, 1001, 'Laptop', 'Asli Can'); 
INSERT INTO malzemeler VALUES (202, 1002, 'Telefon', 'Fatih Ak'); 
INSERT INTO malzemeler VALUES (202, 1003, 'TV', 'Ramiz Özmen');
INSERT INTO malzemeler VALUES (202, 1004, 'Laptop', 'Veli Tan');
select * from malzemeler
select * from toptancilar

SORU: Malzemeler tablosundaki musteri_isim'i Asli Can olan malzeme_isim'ini,
--toptancılar tablosunda irtibat_ismi 'Adem Coş' olan sirket_ismi ile güncelleyiniz.

update malzemeler set malzeme_isim=(select sirket_ismi from toptancilar where irtibat_ismi='Adem Coş')
where musteri_isim='Asli Can'

--SORU: malzeme_ismi Laptop olan musteri_isim'ini, sirket_ismi Apple'in 
--irtibat_isim'i ile güncelleyiniz.

select * from toptancilar

update malzemeler set musteri_isim=(select irtibat_ismi from toptancilar where sirket_ismi='Apple')
where malzeme_isim='Laptop'

create table arac ( 
id int,
marka varchar (30),
model varchar(30), 
fiyat int,
kilometre int, 
vites varchar(20)
)
insert into arac values (100, 'Citroen', 'C3', 500000, 5000, 'Otomatik' );
insert into arac values (101, 'Mercedes', 'C180', 900000, 10000, 'Otomatik' );
insert into arac values (102, 'Honda', 'Civic', 400000, 15000, 'Manuel' );
insert into arac values (103, 'Wolkswagen', 'Golf', 350000, 20000, 'Manuel' );  
insert into arac values (104, 'Ford', 'Mustang', 750000, 5000, 'Otomatik' );
insert into arac values (105, 'Porsche', 'Panamera', 850000, 5000, 'Otomatik' );
insert into arac values (106, 'Bugatti', 'Veyron', 950008, 5000, 'Otomatik' );

--SORU1: arac tablosundaki en yüksek fiyat'ı listele
select max(fiyat) from arac;

--Soru 2:arac tablosundaki araçları toplam fiyatını bulunuz
select sum(fiyat) from arac;

--Soru 3:arac tablosundaki fiyat ortalamalarını bulunuz
select avg(fiyat) from arac;
select round(avg(fiyat)) from arac;
select round(avg(fiyat),2) from arac;

--Soru 4:arac tablosunda kaç tane araç olduğunu bulunuz
select count(id) from arac;
CREATE TABLE meslekler
(
id int PRIMARY KEY, 
isim VARCHAR(50), 
soyisin VARCHAR(50), 
meslek CHAR(9), 
maas int
);
INSERT INTO meslekler VALUES (1, 'Ali', 'Can', 'Doktor', '20000' ); 
INSERT INTO meslekler VALUES (2, 'Veli', 'Cem', 'Mühendis', '18000'); 
INSERT INTO meslekler VALUES (3, 'Mine', 'Bulut', 'Avukat', '17008'); 
INSERT INTO meslekler VALUES (4, 'Mahmut', 'Bulut', 'Ögretmen', '15000'); 
INSERT INTO meslekler VALUES (5, 'Mine', 'Yasa', 'Teknisyen', '13008'); 
INSERT INTO meslekler VALUES (6, 'Veli', 'Yilmaz', 'Hemşire', '12000'); 
INSERT INTO meslekler VALUES (7, 'Ali', 'Can', 'Marangoz', '10000' ); 
INSERT INTO meslekler VALUES (8, 'Veli', 'Cem', 'Tekniker', '14000');


--Soru 1: meslekler tablosunu isime göre sıralayınız
select * from meslekler order by isim;

--Soru 2: meslekler tablosunda maaşı büyükten küçüğe doğru sıralayınız
select * from meslekler order by maas desc;

--Soru 3: meslekler tablosunda ismi Ali olanları maaşı büyükten 
--küçüğe doğru sıralayınız
select * from meslekler where isim='Ali' order by maas desc;

--Soru 4: meslekler tablosunda soyisimi Bulut olanları, 
--maaşı sıralı olarak sorgulayınız
select * from meslekler where soyisin='Bulut' order by maas;

--Soru 5: meslekler tablosunda id değeri 5 ten büyük olan 
--ilk iki veriyi listeleyiniz
select * from meslekler where id>5 limit 2;

--Soru 6: meslekler tablosunda maaşı en yüksek 3 
--kişinin bilgilerini getiriniz
select * from meslekler order by maas desc limit 3;

--Soru 7: meslekler tablosunda ilk 2 den sonra 5 veriyi getiriniz
select * from meslekler offset 2 limit 5;
INSERT INTO meslekler VALUES (9, 'Veli', 'Cem', NULL, '1');
INSERT INTO meslekler VALUES (10, 'Görür', 'Görmez', NULL, '1');
-Soru 9: meslekler tablosunda mesleği null olanları getiriniz
select * from meslekler where meslek is null;

--Soru 10: meslekler tablosundan mesleği null olmayanları getiriniz
select * from meslekler where meslek is not null;







