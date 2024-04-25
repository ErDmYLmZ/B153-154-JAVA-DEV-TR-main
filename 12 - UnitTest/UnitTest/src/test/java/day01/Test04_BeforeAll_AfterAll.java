package day01;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;


import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

public class Test04_BeforeAll_AfterAll {
@BeforeAll
   static void beforeAll(){
    System.out.println("File is opened");
}

@AfterAll
   static void afterAll(){
    System.out.println("File is closed");
}
@Test
void testWithArrays(){
    String str="Unit test with JUnit5";
    String [] anlikDizi=str.split(" ");
    String [] beklenenDizi={"Unit","test","with","JUnit5"};
    assertArrayEquals(beklenenDizi,anlikDizi,"Diziler esit degil");
    System.out.println("testWithArrays calisti");
}
    @Test
    public void testContains(){
        String str="Unit test with Junit5";
        String subStr="Junit5";
        assertTrue(str.contains(subStr));
        System.out.println("contains testi calisti");
    }
    @Test
    void testWithArrays2(){
        String [] anlikDeger = "Unit test with JUnit5".split(" ");
        String [] beklenenDeger = {"Unit","test","with","JUnit5"};
        System.out.println("testWithArrays2 calisti");
        assertTrue(Arrays.equals(anlikDeger,beklenenDeger));
    }

}
