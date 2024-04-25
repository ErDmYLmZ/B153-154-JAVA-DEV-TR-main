package com.tpe.embeddable;

import com.tpe.annotations.Developer01;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class RunnerSave02 {
    public static void main(String[] args) {

        Education edu1=new Education("SELCUK","CENG");
        Education edu2=new Education("HARVARD","PSC");


        Developer02 dev1=new Developer02(1,"HarryPotter","backend","harry@gmail.com",edu1);
        Developer02 dev2=new Developer02(2,"Shrek","frontend","shrek@gmail.com",edu1);
        Developer02 dev3=new Developer02(3,"JackSparrow","mobile","jack@gmail.com",edu2);

        Configuration cfg=new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer02.class);
        SessionFactory sf= cfg.buildSessionFactory();
        Session session=sf.openSession();
        Transaction tx=session.beginTransaction();

        session.save(dev1);
        session.save(dev2);
        session.save(dev3);




        tx.commit();
        session.close();
        sf.close();

    }
}
