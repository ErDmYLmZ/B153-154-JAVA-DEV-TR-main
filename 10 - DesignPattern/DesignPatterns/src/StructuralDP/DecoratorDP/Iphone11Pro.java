package StructuralDP.DecoratorDP;

public class Iphone11Pro extends PhoneDecorator{


    public Iphone11Pro(Iphone basicPhone) {
        super(basicPhone);
    }

    public String getModel(){
        return "11 Pro";
    }

    @Override
    public double getPrice() {
        return super.getPrice()+5000;
    }

    public void roundCorner(){
        System.out.println("corners are rounded");
    }


}
