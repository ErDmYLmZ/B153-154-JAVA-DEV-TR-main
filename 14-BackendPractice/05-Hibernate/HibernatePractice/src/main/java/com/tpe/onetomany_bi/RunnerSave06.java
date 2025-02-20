package com.tpe.onetomany_bi;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.HashSet;
import java.util.Set;

public class RunnerSave06 {
    public static void main(String[] args) {


        Company3 com1 = new Company3(11L, "Google");
        Company3 com2 = new Company3(22L, "Amazon");
        Company3 com3 = new Company3(33L, "Trendyol");


        Developer06 dev1 = new Developer06(1L, "HarryPotter", "backend", "harry@gmail.com");
        Developer06 dev2 = new Developer06(2L, "Shrek", "frontend", "shrek@gmail.com");
        Developer06 dev3 = new Developer06(3L, "JackSparrow", "mobile", "jack@gmail.com");
        Developer06 dev4 = new Developer06(4L, "Richie Rich", "fullstack", "rich@gmail.com");
        Developer06 dev5 = new Developer06(5L, "Gandalf", "backend", "gandalf@gmail.com");

   //ilişki sahibi tarafından setleme işlemleri yapılmalı
        dev1.setCompany(com1);
        dev2.setCompany(com1);
        dev3.setCompany(com2);
        dev4.setCompany(com2);
        dev5.setCompany(com3);

        //com1.getDev().add(dev1); ->database de ilişki kurulmazdı



        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer06.class).addAnnotatedClass(Company3.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();


        session.save(com1);
        session.save(com2);
        session.save(com3);


        session.save(dev1);
        session.save(dev2);
        session.save(dev3);
        session.save(dev4);
        session.save(dev5);


        tx.commit();
        session.close();
        sf.close();

    }
}
