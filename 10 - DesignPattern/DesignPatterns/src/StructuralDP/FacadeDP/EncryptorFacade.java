package StructuralDP.FacadeDP;

public class EncryptorFacade {

    private AESEnc aesEnc=new AESEnc();

    private SHAEnc shaEnc=new SHAEnc();

    private MD5Enc md5Enc=new MD5Enc();


    public void encrypt(String text,EncryptType encType){

        switch (encType){
            case AES: aesEnc.encrypt(text); break;
            case SHA: shaEnc.encrypt(text,"techpro"); break;
            case MD5: md5Enc.encrypt(text,"techpro",true); break;
        }

    }

}
