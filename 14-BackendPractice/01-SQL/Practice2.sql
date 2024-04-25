--Soru 1: child tablosuna ted_vergi nosu 101 olan bir veri girişi yapınız

INSERT INTO child VALUES (101, 1008, 'Araba', 'Ali Can');

--Soru 2: child tablosuna ted_vergnosu 105 olan veri girişi yapınız.

insert into child values(105, 1009,’Phone’,’Tech Pro’);

--Soru 3:  child tablosuna ted_vergino null veri girişi olabilir mi

insert into child values(null,1010,’Bisiklet’,’Fatih B’);


--Soru 4: parent tablosundaki vergi_no 101 olan veriyi siliniz

delete from parent where vergi_n0=101;

--Soru 5:child tablosunda ted_vergino 101 olan ürünleri siliniz.

delete from child where ted_vergino=101;

--Soru 6: parent tablosundaki vergi_no 101 olan veriyi siliniz

delete from parent where vergi_no=101;

--Soru 7: parent tablosunu siliniz.

drop table parent;

--Soru 8: child tablosunu siliniz

drop table child;

--Soru 9: parent tabloyu siliniz

drop table parent;


CREATE TABLE parent2
(
vergi_no int PRIMARY KEY, 
firma_ismi VARCHAR(50), 
irtibat_ismi VARCHAR(50)
);
INSERT INTO parent2 VALUES (101, 'IBM', 'Kim Yon');
INSERT INTO parent2 VALUES (102, 'Huwaei', 'Çin Li');
INSERT INTO parent2 VALUES (103, 'Erikson', 'Maki Tammen');
INSERT INTO parent2 VALUES (104, 'Apple', 'Adam Eve');


CREATE TABLE child2
(
ted_vergino int,
urun_id int,
urun_isim VARCHAR (50),
musteri_isim VARCHAR(50),

CONSTRAINT fk FOREIGN KEY (ted_vergino) REFERENCES parent2 (vergi_no)
ON DELETE CASCADE
);

INSERT INTO child2 VALUES (101, 1001, 'Laptop', 'Ayşe Can');
INSERT INTO child2 VALUES (102, 1002, 'Phone', 'Fatma Aka');
INSERT INTO child2 VALUES (102, 1003, 'TV', 'Ramazan Öz');
INSERT INTO child2 VALUES (102, 1004, 'Laptop', 'Veli Han');
INSERT INTO child2 VALUES (103, 1005, 'Phone', 'Canan Ak');
INSERT INTO child2 VALUES (104, 1006, 'TV', 'Ali Bak');
INSERT INTO child2 VALUES (104, 1007, 'Phone', 'Aslan Yılmaz');
select * from child2;

ON DELETE CASCADE

--Soru 1:  parent2 tablosundaki tüm verileri siliniz

delete from parent2;

--Soru 2:parent2 tablosunu siliniz

drop table parent2 cascade;


--Soru 3 : child tablosunu sil

drop table child2;


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

Soru 1: vergi_no su 202 olan toptancını şirket_ismini ‘VivoBook’ olarak güncelleyin

update toptancilar set sirket_ismi='VivoBook' where vergi_no=202;

Soru 2: toptancilar tablosundaki tüm şirket isimlerini ‘NOKIA’ olarak güncelleyiniz

update toptancilar set sirket_ismi='NOKIA';

--Soru 3: vergi_no su 201 olan toptancının şirket ismini nokia ve irtibat_ismini Canan Can olarak güncelleyiniz

update toptancilar set sirket_ismi='nokia',irtibat_ismi='Canan Can' where vergi_no=201;

--Soru 4: toptancılar tablosunda Şirket ismi nokia olan firmanın irtibat ismini Bilal Ayhan diye güncelle

update toptancilar set irtibat_ismi='Bilal Ayhan' where sirket_ismi='nokia';

--Soru 5 : malzemeler tablosundaki telefon değerlerini phone olarak güncelleyiniz

update malzemeler set malzeme_isim='Phone' where malzeme_isim='Telefon';

--Soru 6: Malzemeler tablosundaki malzeme_id değeri 1002 den büyük olanların malzeme id lerini 1 arttır

update malzemeler set malzeme_id=malzeme_id+1 where malzeme_id>1002;

--Soru 7: malzemeler tablosundaki tüm malzemelerin malzeme_id değerlerini tedarik vergi no ile toplayarak güncelleyiniz

update malzemeler set malzeme_id=malzeme_id+ted_vergino;

