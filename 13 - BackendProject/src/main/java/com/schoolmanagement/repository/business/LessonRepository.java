package com.schoolmanagement.repository.business;

import com.schoolmanagement.entity.concretes.business.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.Set;

public interface LessonRepository extends JpaRepository<Lesson, Long> {
    boolean existsLessonByLessonNameEqualsIgnoreCase(String lessonName);


    Optional<Lesson> getLessonByLessonName(String lessonName);

    @Query(value = "SELECT l FROM Lesson l WHERE l.lessonId IN :lessons")
    Set<Lesson> getLessonByLessonIdList(/*@Param("lessons") */Set<Long> lessons);

}
