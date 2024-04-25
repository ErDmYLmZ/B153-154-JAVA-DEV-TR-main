package day02;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class Test02_DisplayName {
    //test penceresinde test ismi yerine aciklama ciksin istiyorsak

    @Test
    @DisplayName("Test parseInt() to check if it is throwing non-digit value")
    void testException(){
        String str="Merhaba"; //test ismi test_parseInt_if_it_is_throwing_nonvalue_digit :)
        assertThrows(NumberFormatException.class,()->
        {
            Integer.parseInt(str);
        });
    }
}
