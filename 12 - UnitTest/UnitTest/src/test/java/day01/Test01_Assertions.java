package day01;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Test01_Assertions {

    @Test
    public void test() {
        //main methodu olmadan calisir hale geldi
        //JUnit icinde gomulu olarak gelen main methodunu kullandi
        //JUnit5 (Jupiter)methodlarin erişim belirleyicisini public yapmak zorunda birakmiyor
    }

    @Test
    public void testLength() {
        String cumle = "Merhaba Batch";  //13
        int anlikDeger = cumle.length();
        int beklenenDeger = 13;

        assertEquals(beklenenDeger, anlikDeger); //aldigi parametreleri karsilastirir, ayni ise test gecer

    }
//baska bir ornek toUpperCase() methodunu test edelim

    @Test
    public void testToUpperCase() {
        String anlikDeger = "Merhaba".toUpperCase(); //MERHABA
        String beklenenDeger = "MERHABA";

        assertEquals(beklenenDeger, anlikDeger, "toUpperCase() methodu duzgun calismiyor");
        //assertEquals ta 3.parametre test fail durumunda verilmesi istenen hata mesaji icin kullanilir

    }

    @Test
    public void testToplama() {
        int sayi1 = 10;
        int sayi2 = 5;
        int anlikDeger=Math.addExact(sayi1,sayi2);
        int beklenenDeger=15;
        assertEquals(beklenenDeger,anlikDeger);
    }

    //contains methodunu test edelim
    @Test
    public void testContains(){

        assertEquals(false,"Developers".contains("tester"));
    }

}
