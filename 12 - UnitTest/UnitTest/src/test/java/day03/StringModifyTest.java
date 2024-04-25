package day03;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class StringModifyTest {
    StringModify obj1;

    @BeforeEach
    void setUp(){
        obj1=new StringModify();
        System.out.println("beforeeach calisti");
    }

    @AfterEach
    void tearDown(){
        obj1=null;
        System.out.println("aftereach calisti");
    }
    @ParameterizedTest
    @CsvSource(value = {"BC,AABC","BC,ABC","B,AB"})
    void deleteIfItIsInFirstTwoPositionTest(String expected, String actual){
       assertEquals(expected,obj1.deleteIfItIsInFirstTwoPosition(actual));
    }

}
