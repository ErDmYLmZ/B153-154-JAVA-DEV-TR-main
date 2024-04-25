package day01;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;


public class Test02_Assertions02 {
    //bazen yapacagim testlerde bu dogru degil mi kontrolleri yapmak istersem
    @Test
    public void testToFindMin() {
        assertTrue(Math.min(3, 5) == 3);
        // assertFalse(Math.min(3,5)==3);
    }

    @Test
    public void testSplit() {
        String str = "Test islemi cok kolay";
        String[] anlikDizi = str.split(" "); //{"Test","islemi","cok","kolay"}
        String[] beklenenDizi = {"Test", "islemi", "cok", "kolay"};

        assertTrue(Arrays.equals(anlikDizi,beklenenDizi));
    }
}
