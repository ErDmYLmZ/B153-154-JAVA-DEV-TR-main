package StructuralDP.DecoratorDP;

public class Iphone implements Phone{//mevcut obje


    @Override
    public String getName() {
        return "Iphone";
    }

    @Override
    public int getCameraCount() {
        return 3;
    }

    @Override
    public double getPrice() {
        return 15000;
    }


}
