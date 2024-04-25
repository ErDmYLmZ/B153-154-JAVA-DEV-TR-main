package day03;

public class StringModify {

    // Task : kelimenin ilk 2 harf icerisinde A varsa silinsin (kelime icindeki harflerin hepsi buyuk olacak)
    //AABC -->BC, ABC-->BC ,A--> "", AA -->""
    public String deleteIfItIsInFirstTwoPosition(String str){
        if(str.length()<=2){
            return str.replaceAll("A","");
        }

        String firstTwoChars=str.substring(0,2);  //AABCDAVG -->AA////
        String afterFirstTwoChars=str.substring(2); //AABCDAVG -->BCDAVG
        return firstTwoChars.replaceAll("A","")+afterFirstTwoChars;
    }

}
