package com.tpe.onetoone;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class RunnerFetch03 {
    public static void main(String[] args) {


        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer03.class).addAnnotatedClass(Computer.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();

//id=1 olan developerın tüm bilgilerini getiriniz
        Developer03 dev = session.get(Developer03.class, 1L);
        System.out.println("**************************");
        System.out.println(dev);
        System.out.println("**************************");

//id=2 olan computerı kullanan dev bilgilerini getiriniz
        Computer com1 = session.get(Computer.class, 2L);
        System.out.println("**************************");
        System.out.println(com1.getDeveloper());
        System.out.println("**************************");


        //id=2 olan developerın computer bilgilerini getiriniz//ödev
        Developer03 dev1 = session.get(Developer03.class, 2L);
        System.out.println("**************************");
        System.out.println(dev1.getComputer());
        System.out.println("**************************");

        tx.commit();
        session.close();
        sf.close();

    }
}
