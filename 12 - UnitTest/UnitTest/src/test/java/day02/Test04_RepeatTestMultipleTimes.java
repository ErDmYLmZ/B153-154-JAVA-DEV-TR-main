package day02;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.RepeatedTest;

import java.util.Random;

import static org.junit.jupiter.api.Assertions.*;

public class Test04_RepeatTestMultipleTimes {
    //Eger bir testi arka arkaya tekrarlamak istersek :

    @RepeatedTest(5)
    void testSubstring(){
        assertEquals("Java","Java is an OOP language".substring(0,4));
        System.out.println("Test calisti");
    }

    @RepeatedTest(3)
    //@Disabled //herhangi bir testi pasif hale getirmek icin kullanilir
    void testRepeat2(){
        assertEquals(5,Math.addExact(2,3));
        System.out.println("test2 calisti");
    }

    //3.ornek
    Random rm=new Random();
    @RepeatedTest(5)
    void testMathExact(){
        int sayi1=rm.nextInt(10);
        int sayi2=rm.nextInt(10);

        assertEquals(sayi1+sayi2,Math.addExact(sayi1,sayi2));
        System.out.println("Sayi 1 :"+sayi1+" sayi2 : "+sayi2+" sonuc : "+(sayi1+sayi2));
    }
}
