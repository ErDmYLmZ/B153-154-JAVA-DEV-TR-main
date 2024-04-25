package com.tpe.manytoone;

import com.tpe.onetoone.Computer;
import com.tpe.onetoone.Developer03;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.Arrays;
import java.util.List;

public class RunnerFetch04 {
    public static void main(String[] args) {


        Configuration cfg = new Configuration().configure("hibernate.cfg.xml").
                addAnnotatedClass(Developer04.class).addAnnotatedClass(Company.class);
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();
        Transaction tx = session.beginTransaction();


//1--id=2 si olan developerın çalıştığı company bilgilerini getiriniz
        Developer04 dev = session.get(Developer04.class, 2L);
        System.out.println("******************************");
        System.out.println(dev);
        System.out.println("------------------------------");
        System.out.println(dev.getCompany());

        //developerdan company bilgilerine ulaşabiliyoruz ama tersi mümkün değil

//2--tüm developerların ismini ve çalıştığı company isimlerini görüntüleyin
        String sql = "Select d.dev_name,c.companyName from t_developer04 d inner join company c on d.company_id=c.id ";
        List<Object[]> resultList = session.createSQLQuery(sql).getResultList();
        for (Object[] r : resultList) {
            System.out.println(Arrays.toString(r));
        }
//hql ile çözüm
        System.out.println("2.yol hql");
        String hql="select d.name,c.companyName from Developer04 d inner join d.company c";
        List<Object[]> result= session.createQuery(hql).getResultList();
        for(Object[] r:result){
            System.out.println(Arrays.toString(r));
        }

//Ödev
        //3--Google da çalışan developerların ismini ve branchini görüntüleyiniz


        tx.commit();
        session.close();
        sf.close();

    }
}
