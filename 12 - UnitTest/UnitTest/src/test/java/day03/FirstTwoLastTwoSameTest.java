package day03;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FirstTwoLastTwoSameTest {
    FirstTwoLastTwoSame obje = new FirstTwoLastTwoSame();

    @ParameterizedTest
    @CsvSource(value={"true,ABAB","true,BABA","false,ANNE","true,AB","false,A","true,AAA"})
    void checkIfFirstTwoLastTwoSameTest(boolean rs,String str){
        assertEquals(rs,obje.checkIfFirstTwoLastTwoSame(str));
    }
}
