package StructuralDP.DecoratorDP;

public class Iphone11 extends PhoneDecorator{


    public Iphone11(Iphone basicPhone) {
        super(basicPhone);
    }

    public String getModel(){
        return "11";
    }

//diğer işlevler basicPhone(mevcut obje) nun aynısı
    //ekstra bir işlev daha ekledik.
}
