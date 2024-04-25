CREATE TABLE ogrenciler (
    id INTEGER PRIMARY KEY,
    isim VARCHAR(50),
    adres VARCHAR(100),
    notu INTEGER
);

INSERT INTO ogrenciler (id, isim, adres, notu) VALUES
(1, 'Ahmet Yılmaz', 'Ankara', 80),
(2, 'Burcu Öztürk', 'İstanbul', 90),
(3, 'Cemal Doğan', 'İzmir', 70),
(4, 'Deniz Arslan', 'Adana', 85),
(5, 'Ebru Kaya', 'Bursa', 95),
(6, 'Fatih Demir', 'Antalya', 65),
(7, 'Gizem Tekin', 'Konya', 75);

select * from ogrenciler;
--Soru 1: Öğrenciler tablosundaki id ve isim sütununu getiriniz

SELECT id,isim FROM ogrenciler;

--Soru 2: Sınav notu 80 den büyük olan öğrencilerin tüm bilgilerini listele

SELECT * FROM ogrenciler WHERE notu > 80;

--Soru 3:Adresi Ankara olan öğrencilerin tüm bilgilerini getir

select * from ogrenciler where adres='Ankara';

--Soru 4: Sınav notu 80 ve adresi Ankara Olan öğrenci ismini getirsin

SELECT isim FROM ogrenciler WHERE notu = 80 AND adres = 'Ankara'

--Soru 5: Sınav notu 65 veya 80 olan öğrencilerin tüm bilgilerini listeleme
select * from ogrenciler where notu=65 or notu=80;
SELECT * FROM ogrenciler  WHERE notu IN(65,80);

--Soru 6: Notu 65 ile 85 arasında olan öğrencilerin tüm bilgilerini listeleyin
SELECT * FROM ogrenciler WHERE notu BETWEEN 65 AND 80;

--Soru 7: id si 2 ile 4 arasında olmayan öğrencilerin isim ve notunu listeleyiniz

select id,isim,notu from ogrenciler where id not between 2 and 4;

--Soru 8: notu 80 olan satırı siliniz

delete from ogrenciler where notu=80;

--Soru 9: Adresi Adana olan satırı siliniz

delete from ogrenciler where adres='Adana';

--Soru 10: ismi Burcu Öztürk veya Fatih Demir olanları sil
delete from ogrenciler where isim='Burcu Öztürk' or isim='Fatih Demir';

--Soru 11: notu 80 den küçük olanları siliniz
delete from ogrenciler where notu<80

--Soru 12: Tablolardaki tüm satırları siliniz
delete from ogrenciler;

1.	Veri Sorgulama Dili (Data Query Language - DQL)
SELECT: Veri Tabanındaki verileri alır.

2.	Veri Kullanma Dili (Data Manipulation Language - DML)
INSERT : Veritabanına yeni veri ekler.  
UPDATE : Veritabanındaki verileri günceller.  
DELETE : Veritabanındaki verileri siler.

3.	Veri Tanimlama Dili (Data Definition Language - DDL)
CREATE : Bir veritabanı veya veritabanı içinde tablo oluşturur.  
ALTER : Bir veritabanı veya veritabanı içindeki tabloyu günceller.  
DROP : Bir veritabanını veya veritabanı içindeki tabloyu siler.

4.	Veri Kontrol Dili (Data Control Language - DCL)
GRANT : Bir kullanıcıya yetki vermek için kullanılır.
REVOKE : Bir kullanıcıya verilen yetkiyi geri almak için kullanılır.

CREATE TABLE parent
(
vergi_no int PRIMARY KEY, 
firma_ismi VARCHAR(50), 
irtibat_ismi VARCHAR(50)
);

INSERT INTO parent VALUES (101, 'IBM', 'Kim Yon');
INSERT INTO parent VALUES (102, 'Huwaei', 'Çin Li');
INSERT INTO parent VALUES (103, 'Erikson', 'Maki Tammen');
INSERT INTO parent VALUES (104, 'Apple', 'Adam Eve');
INSERT INTO parent VALUES (104, 'Appe', 'Adm Eve');


CREATE TABLE child
(
ted_vergino int,
urun_id int,
urun_isim VARCHAR (50),
musteri_isim VARCHAR(50),
	CONSTRAINT fk FOREIGN KEY(ted_vergino) REFERENCES PARENT(vergi_no)
);

INSERT INTO child VALUES (101, 1001, 'Laptop', 'Ayşe Can');
INSERT INTO child VALUES (102, 1002, 'Phone', 'Fatma Aka');
INSERT INTO child VALUES (102, 1003, 'TV', 'Ramazan Öz');
INSERT INTO child VALUES (102, 1004, 'Laptop', 'Veli Han');
INSERT INTO child VALUES (103, 1005, 'Phone', 'Canan Ak');
INSERT INTO child VALUES (104, 1006, 'TV', 'Ali Bak');
INSERT INTO child VALUES (104, 1007, 'Phone', 'Aslan Yılmaz');


