package com.tpe.onetomany_bi;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.List;

public class RunnerFetch06 {
    public static void main(String[] args) {


        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer06.class).addAnnotatedClass(Company3.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();

        //1--Amazon da çalışan developer bilgilerini getiriniz.
        String hql = "FROM Company3 c WHERE c.companyName='Amazon'";
        Company3 companyA = session.createQuery(hql, Company3.class).uniqueResult();
        System.out.println("*******Amazonda Çalışanlar******");
        companyA.getDev().forEach(System.out::println);
        System.out.println("---------------------------------");
        //company den dev lere ulaşılabiliyor

        //2--"Gandalf" ın çalıştığı company bilgilerini getiriniz.
        String hql2 = "FROM Developer06 d WHERE d.name='Gandalf'";
        Developer06 dev = session.createQuery(hql2, Developer06.class).uniqueResult();
        System.out.println("*******Gandalfın Companysi******");
        System.out.println(dev.getCompany());
        System.out.println("---------------------------------");

        //****OrphanRemoval- Cascade*****
        //3--id=22 olan company nin dev listesinden id=3 olan developerı siliniz
        Developer06 dev3 = session.get(Developer06.class, 3L);
        Company3 company=session.get(Company3.class,22L);
        company.getDev().remove(dev3);
        System.out.println(company.getDev());

////4--id 11 olan company i siliniz
//        //orphanRemoval true ise table dan da siler
//        Company3 company1=session.get(Company3.class,11L);
//        session.delete(company1);



        tx.commit();
        session.close();
        sf.close();

    }
}
