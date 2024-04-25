package com.tpe.manytoone;

import com.tpe.onetoone.Computer;
import com.tpe.onetoone.Developer03;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class RunnerSave04 {
    public static void main(String[] args) {


        Company com1 = new Company(11L, "Google");
        Company com2 = new Company(22L, "Amazon");


        Developer04 dev1 = new Developer04(1L, "HarryPotter", "backend", "harry@gmail.com", com1);
        Developer04 dev2 = new Developer04(2L, "Shrek", "frontend", "shrek@gmail.com", com1);
        Developer04 dev3 = new Developer04(3L, "JackSparrow", "mobile", "jack@gmail.com", com2);
        Developer04 dev4 = new Developer04(4L, "Richie Rich", "fullstack", "rich@gmail.com", com2);
        Developer04 dev5 = new Developer04(5L, "Gandalf", "backend", "gandalf@gmail.com", com2);


        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer04.class).addAnnotatedClass(Company.class);
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
