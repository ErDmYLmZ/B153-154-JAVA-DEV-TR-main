package day02;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

public class Test03_Parameterized {
    @Test
    void testLength() {
        assertTrue("Ozgur".length() > 0);
        assertTrue("Yavuz".length() > 0);
        assertTrue("Aynur".length() > 0);
        assertTrue("Meryem".length() > 0);
    }

    //Yukaridaki testte 4 defa assertTrue yazdik, daha clean code olmasi icin:
    @ParameterizedTest
    @ValueSource(strings = {"Ozgur", "Yavuz", "Aynur", "Meryem"})
    void testLength2(String str) {
        assertTrue(str.length() > 0);

    }

    @Test
    void testUpperCase() {
        String str1 = "Cemal";
        String str2 = "Oguzhan";
        String str3 = "Nurullah";

        assertEquals("CEMAL", str1.toUpperCase());
        assertEquals("OGUZHAN", str2.toUpperCase());
        assertEquals("NURULLAH", str3.toUpperCase());
    }

    //Yukaridaki ornegi parametreli yapalim
    @ParameterizedTest
    @CsvSource(value = {"CEMAL,Cemal", "OGUZHAN,Oguzhan", "NURULLAH,Nurullah"})
    void testUpperCase2(String str1, String str2) {
        assertEquals(str1, str2.toUpperCase());
    }

    //3.ornek
    @ParameterizedTest
    @CsvSource(value={"True,Java,a","True,JUnit,t","False,hello,a"})
    void testContains(boolean b,String str1,String str2){
        assertEquals(b,str1.contains(str2));
    }
}
