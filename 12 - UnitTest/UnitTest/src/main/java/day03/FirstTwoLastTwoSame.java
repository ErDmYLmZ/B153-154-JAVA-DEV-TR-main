package day03;

public class FirstTwoLastTwoSame {

    //Task : İlk 2 ve son2 karakteri ayni mi?
    public boolean checkIfFirstTwoLastTwoSame(String str){

        if(str.length()<2) return false;
        if(str.length()==2) return true;

        String firstTwoChars=str.substring(0,2);
        String lastTwoChars=str.substring(str.length()-2);
        return firstTwoChars.equals(lastTwoChars);

    }
}
