package com.tpe.onetoone;

import com.tpe.embeddable.Developer02;
import com.tpe.embeddable.Education;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class RunnerSave03 {
    public static void main(String[] args) {

        Computer c1 = new Computer(1L, "12345678", "MSI");
        Computer c2 = new Computer(2L, "12345678", "Toshiba");
        Computer c3 = new Computer(3L, "12345678", "Dell");


        Developer03 dev1 = new Developer03(1L, "HarryPotter", "backend", "harry@gmail.com");
        Developer03 dev2 = new Developer03(2L, "Shrek", "frontend", "shrek@gmail.com");
        Developer03 dev3 = new Developer03(3L, "JackSparrow", "mobile", "jack@gmail.com");

        dev1.setComputer(c1);
        dev2.setComputer(c2);
        dev3.setComputer(c3);

        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer03.class).addAnnotatedClass(Computer.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();


        session.save(c1);
        session.save(c2);
        session.save(c3);

        session.save(dev1);
        session.save(dev2);
        session.save(dev3);


        tx.commit();
        session.close();
        sf.close();

    }
}
