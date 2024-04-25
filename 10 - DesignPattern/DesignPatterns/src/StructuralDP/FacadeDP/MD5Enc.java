package StructuralDP.FacadeDP;

public class MD5Enc {

    public void encrypt(String text,String key,boolean complex ){
        if (complex){
            System.out.println("<MD5>***"+text+key+"***</MD5>");
        }else {
            System.out.println("<MD5>"+text+key+"</MD5>");
        }
    }

}
