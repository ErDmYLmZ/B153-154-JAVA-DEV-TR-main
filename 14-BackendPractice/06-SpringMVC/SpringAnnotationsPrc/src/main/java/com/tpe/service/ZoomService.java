package com.tpe.service;

import com.tpe.domain.Course;
import com.tpe.repository.Repository;
import com.tpe.thirdparty.InstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component //Spring bu classtan kallanılmak üzere bean üretiyor
public class ZoomService implements  CourseService{


    //thirdparty bir methodun classına ihtiyaç var

    @Autowired
    private InstructorService instructorService;

//    @Autowired //Repository i injekte etmiş oluyoruz.
//    @Qualifier("cloudRepository")  //Repository i implement eden hangi classtan olduğunu söyler//camelCase mantığı vardır
//    private Repository repository;

    //3 tane yöntem var 1.field oluşturarak-2. setleyerek-3.Constructor

//    @Autowired
//    @Qualifier("cloudRepository")
//    private Repository repository;
//    public void setRepository(Repository repository) {
//        this.repository = repository;
//    }




    @Autowired //optional keyfi
    @Qualifier("cloudRepository")
    private Repository repository;
    public ZoomService(@Qualifier("cloudRepository") Repository repository) {
        this.repository = repository;
    }

    @Value("${app.code}")
    String code;
    @Override
    public void teachCourse(Course course) {
      //  System.out.println(course.getName()+" dersi zoom ile anlatılıyor");
        System.out.println(code+" - "+course.getName()+" dersi zoom ile anlatılıyor");
        instructorService.teach(course.getName(),"Nesibe H");

    }

    @Override
    public void saveCourse(Course course) {
        repository.save(course);

    }
}
