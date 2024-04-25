package day02;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Test06_GroupingTest {
    //amacimiz : birbiri ile ilsikili olan methodalari gruplamak

    //toplama ve carpma islemlerine ait testleri bir arada gormek istersek

    @Nested  //ic ice class lari test pencersinde gruplamak icin jkullanilir
    class MultiplyTest {  //carpma islemi ile ilgili testler birarada toplanmis olacak
        @ParameterizedTest
        @CsvSource(value = {"-12,-3,4", "-12,3,-4", "12,-3,-4"})
        void testMultiplyWithoutZero(int rs, int x, int y) {
            assertEquals(rs, Math.multiplyExact(x, y));
        }

        @ParameterizedTest
        @CsvSource(value = {"0,3,0", "0,0,-4", "0,0,0"})
        void testMultiplyWithZero(int rs, int x, int y) {
            assertEquals(rs, Math.multiplyExact(x, y));
        }
    }

    @Nested
    class AddTest {  //toplama ile ilgili islemler ayni grup icinde gosterilecek
        @ParameterizedTest
        @CsvSource(value = {"-1,-4,3", "1,4,-3", "-7,-4,-3"})
        void testAddWithoutZero(int rs, int x, int y) {
            assertEquals(rs, Math.addExact(x, y));
        }

        @ParameterizedTest
        @CsvSource(value={"5,0,5","-4,0,-4","0,4,-4"})
        void testWithZero(int rs,int x, int y){
            assertEquals(rs,Math.addExact(x,y));
        }
    }


}
