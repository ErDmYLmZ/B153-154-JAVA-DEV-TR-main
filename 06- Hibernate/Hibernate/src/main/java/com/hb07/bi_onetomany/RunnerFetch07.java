package com.hb07.bi_onetomany;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import java.util.Arrays;
import java.util.List;

public class RunnerFetch07 {
    public static void main(String[] args) {

        Configuration con=new Configuration().configure()
                .addAnnotatedClass(Student07.class)
                                                            .addAnnotatedClass(Book07.class);

        SessionFactory sf =con.buildSessionFactory();
        Session session=sf.openSession();
        Transaction tx=session.beginTransaction();

        //id si 1001 studentın tüm kitaplarını görelim.
//        Student07 student=session.get(Student07.class,1001);
//        System.out.println(student.getBookList());

        //id:101 kitabın sahibi olan öğrenciyi görelim.
//        Book07 book=session.get(Book07.class,101);
//        System.out.println(book.getStudent());

        // !!! SQL ile, kitabı olan öğrencilerin(INNER JOIN) öğrenci ve kitap isimlerini listeleyelim(ödev1)
        String sqlQuery =
                "SELECT s.std_name,b.name FROM t_student07 s INNER JOIN book07 b ON s.id=b.student_id";
        List<Object[]> resulList1 = session.createSQLQuery(sqlQuery).getResultList();
        for (Object[] object : resulList1) {
            System.out.println(Arrays.toString(object));
        }
        // !!! HQL ile, kitabı olan öğrencilerin(INNER JOIN) öğrenci ve kitap isimlerini listeleyelim(ödev2)
        String hqlQuery =
                "SELECT s.name,b.name FROM Student07 s INNER JOIN Book07 b ON s.id=b.student.id";
        List<Object[]> resultList2 = session.createQuery(hqlQuery).getResultList();
        resultList2.forEach(t -> System.out.println(Arrays.toString(t)));

        // !!! book ismi içinde "Java" geçen student kayıtlarını alalım ( HQL )Ödevv3
        String hqlQuery2 = "SELECT s FROM Student07 s INNER JOIN s.bookList b WHERE b.name LIKE '%Java%'";
        List<Student07> resultList3 = session.createQuery(hqlQuery2, Student07.class).getResultList();
        for (Student07 student07: resultList3) {
            System.out.println(student07);
        }

        tx.commit();
        session.close();
        sf.close();

    }
}
