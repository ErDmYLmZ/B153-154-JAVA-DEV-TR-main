package day01;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;


import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

public class Test03_BeforeEach_AfterEach {

    //@BeforeEach annotasyonu kullanilan method her bir test önce bir defa calisir
    //@AfterEach annotasyonu kullanilan method her bir testten sonra bir defa calisir
    String str;

    @BeforeEach
    void beforeEach(){
        str="JUnit5 is better than JUnit4";
        System.out.println("*****beforeEach() calisti***********");
    }

    @AfterEach
    void afterEach(){
        str=null;
        System.out.println("************afterEach() calisti*******");
    }
    @Test
    void testLength(){
        int anlikDeger=str.length();
        int beklenenDeger=28;
        assertEquals(beklenenDeger,anlikDeger);

    }
    @Test
    void testSplit(TestInfo info){ // calisan testin adini gostermek icin TestInfo kullanilir
        String [] anlikDizi=str.split(" ");
        String [] beklenenDizi={"JUnit5","is","better","than","JUnit4"};
        System.out.println(info.getDisplayName()+" calisti");
        assertTrue(Arrays.equals(beklenenDizi,anlikDizi));
    }



}
