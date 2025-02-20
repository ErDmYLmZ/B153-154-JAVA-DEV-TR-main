package com.tpe.embeddable;

import com.tpe.annotations.Developer01;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class RunnerFetch02 {
    public static void main(String[] args) {


        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer02.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();


        //1-id=1 olan developerın tüm bilgilerini getiriniz
        Developer02 dev= session.get(Developer02.class,1);
        System.out.println(dev);

        //2-id=1 olan developerın sadece eğitim bilgilerini getiriniz
        System.out.println("****Eğitim bilgileri*****");
        System.out.println(dev.getEducation());


        tx.commit();
        session.close();
        sf.close();

    }
}
