package com.tpe.onetomany_uni;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.Arrays;
import java.util.List;

public class RunnerFetch05 {
    public static void main(String[] args) {


        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer05.class).addAnnotatedClass(Company2.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();

        //1--Amazonda çalışan developer bilgilerini getiriniz
        String hql="from Company3 c where c.companyName='Amazon'";
        Company2 company=session.createQuery(hql, Company2.class).uniqueResult();
        System.out.println("*****Amazonda Çalışanlar*****");
        company.getDev().forEach(System.out::println);


        //2.yol
        System.out.println("***hql2 ile amazonda çalışanlar******");
        String hql2="Select c.dev from Company3 c where c.companyName='Amazon'";
        List<Object> result=session.createQuery(hql2).getResultList();
        result.forEach(System.out::println);



        tx.commit();
        session.close();
        sf.close();

    }
}
