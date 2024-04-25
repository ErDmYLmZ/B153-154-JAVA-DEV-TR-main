package StructuralDP.FacadeDP;

public class FacadeRunner {
    public static void main(String[] args) {

        String text="Design Pattern";


        AESEnc aesEnc=new AESEnc();
        aesEnc.encrypt(text);

        SHAEnc shaEnc=new SHAEnc();
        shaEnc.encrypt(text,"techpro");

        MD5Enc md5Enc=new MD5Enc();
        md5Enc.encrypt(text,"techpro",true);

        //-----------------------------------------------
        //bir arayüz olsa sadece kullanmak istediğimiz algoritmayı seçsek
        //encrypt metodunun detayı ile ilgilenmeden metodu kullanabilsek

        System.out.println("---------------FacadeDP-----------------------");

        EncryptorFacade encryptor=new EncryptorFacade();
        encryptor.encrypt(text,EncryptType.AES);
        encryptor.encrypt(text,EncryptType.MD5);








    }
}
