package com.tpe.annotations;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class RunnerFetch01 {
    public static void main(String[] args) {

        Developer01 dev1 = new Developer01();

        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Developer01.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();


        //     dev1 = session.get(Developer01.class, 1);
        //     System.out.println(dev1);

        // 1-sql ile tüm datayı çekiniz
        String sqlQuery1 = "SELECT * FROM t_developer01";
        List<Object[]> resultList1 = session.createSQLQuery(sqlQuery1).getResultList();
        System.out.println("******SQL******");
        for (Object[] r : resultList1) {
            System.out.println(Arrays.toString(r));
        }


        //2-hql ile tüm datayı çekiniz
        String hqlQuery01 = "FROM Developer01";
        List<Developer01> resultList2 = session.createQuery(hqlQuery01, Developer01.class).getResultList();
        System.out.println("******HQL******");
        for (Developer01 d : resultList2) {
            System.out.println(d);
        }


      //3-hql ile ismi 'Shrek' olan datayı çekiniz
        String hqlQuery2="FROM Developer01 WHERE name='Shrek'";
        List<Developer01> resultList3= session.createQuery(hqlQuery2, Developer01.class).getResultList();
        System.out.println("******HQLshrek******");
        System.out.println(resultList3);


        //4-hql ile email 'jack@gmail.com' olan datayı çekiniz
        String hqlQuery3="FROM Developer01 WHERE email='jack@gmail.com'";
        Object result=session.createQuery(hqlQuery3, Developer01.class).uniqueResult();
        System.out.println("****HQLJack*****");
        System.out.println(result);

        //ödev
        //5-hql ile branch i backend olan datanın ismini getiriniz
        String hqlQuery4="FROM Developer01 WHERE branch='backend'";
        Object resultB=session.createQuery(hqlQuery4, Developer01.class).uniqueResult();
        System.out.println("****HQLBranch*****");
        System.out.println(resultB);

        tx.commit();
        session.close();
        sf.close();

    }
}
