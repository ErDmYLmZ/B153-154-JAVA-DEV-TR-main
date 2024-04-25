package com.hb12.caching;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import javax.persistence.Query;

/*
1)  First Level Cache --->
            * nesneler için kullanılır.
            * defaultta açık geliyor , kapatma durumu yok
            * Aynı session içinde kayıt alır
            * session kapanınca içindekiler silinir

2) Second Level Cache --->
            * nesneler için kullanılır.
            * Defaultta kapalıdır
            * Session factory seviyesinde cacheleme yapar, yani farklı
                    sessionlar arasında data kullanılabiliyor
            * hibernate.cfg.xml den active edilebilir
            *aynı data aynı sessionda first level cacheden gelir,
             aynı data farklı sessionda second level cacheden gelir.


3) Query Cache
            * Query ler için kullanılıyor
            * hibernate.cfg.xml den active edilebilir
            * First/Second Level Cache ile birlikte kullanılabilir.

 */
public class RunnerFetch12 {
    public static void main(String[] args) {

        Configuration con=new Configuration().configure().addAnnotatedClass(Student12.class);

        SessionFactory sf= con.buildSessionFactory();
        Session session=sf.openSession();
        Transaction tx= session.beginTransaction();


//        System.out.println("ilk get işlemi ile id=1 olan student:");
//        Student12 student=session.get(Student12.class,1L);
//        System.out.println(student);

        //---------------query cache-----------------
        Query query =session.createQuery("FROM Student12").setCacheable(true);
        query.getResultList();


        query.getResultList();

        //---------------query cache-----------------



        // session.clear();//sessiondaki cache e alınan dataları temizler.

//        System.out.println("ikinci get işlemi ile id=1 olan student:");
//        Student12 student2=session.get(Student12.class,1L);
//        System.out.println(student2);


        tx.commit();
        session.close();//first level cache temizlenir.

        Session session2=sf.openSession();
        Transaction tx2=session2.beginTransaction();

//        System.out.println("session close edildikten sonra tekrar get işlemi ile id=1 olan student:");
//        Student12 student2=session2.get(Student12.class,1L);
//        System.out.println(student2);


        tx2.commit();
        session2.close();


        sf.close();


        //SONUÇ:First Level Cache:session seviyesinde
        //DB den bir data çekildiğinde cache e alınır.
        //aynı sessionda aynı dataya çekilmek istendiğinde DB ye gitmeden cacheden datayı getirir
        //farklı sessionda aynı dataya çekilmek istendiğinde DB ye tekrar sorgu gönderilir.
        //session close veya clear edildiğinde cache de temizlenir.

        //Second Level Cache:session factory seviyesinde
        //farklı sessionda aynı dataya çekilmek istendiğinde DB ye tekrar sorgu göndermez.


    }
}
