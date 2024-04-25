package StructuralDP.DecoratorDP;

public class Iphone11ProMax extends Iphone11Pro{

    public Iphone11ProMax(Iphone basicPhone) {
        super(basicPhone);
    }

    @Override
    public String getModel() {
        return super.getModel()+ " Max";
    }

    public String setColor(){
        return "GOLD";
    }
}
