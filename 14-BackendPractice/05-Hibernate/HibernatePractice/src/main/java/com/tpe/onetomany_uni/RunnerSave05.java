package com.tpe.onetomany_uni;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.HashSet;
import java.util.Set;

public class RunnerSave05 {
    public static void main(String[] args) {


        Company2 com1 = new Company2(11L, "Google");
        Company2 com2 = new Company2(22L, "Amazon");


        Developer05 dev1 = new Developer05(1L, "HarryPotter", "backend", "harry@gmail.com");
        Developer05 dev2 = new Developer05(2L, "Shrek", "frontend", "shrek@gmail.com");
        Developer05 dev3 = new Developer05(3L, "JackSparrow", "mobile", "jack@gmail.com");
        Developer05 dev4 = new Developer05(4L, "Richie Rich", "fullstack", "rich@gmail.com");
        Developer05 dev5 = new Developer05(5L, "Gandalf", "backend", "gandalf@gmail.com");

        com1.getDev().add(dev1);
        com1.getDev().add(dev2);

        Set<Developer05> devSet=new HashSet<>();
        devSet.add(dev3);
        devSet.add(dev4);
        devSet.add(dev5);

        com2.setDev(devSet);


        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer05.class).addAnnotatedClass(Company2.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();


        session.save(com1);
        session.save(com2);

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
