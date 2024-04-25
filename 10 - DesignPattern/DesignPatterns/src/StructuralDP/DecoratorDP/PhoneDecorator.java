package StructuralDP.DecoratorDP;

public class PhoneDecorator implements Phone{

    private Phone basicPhone;//mevcut obje

    public PhoneDecorator(Phone basicPhone) {
        this.basicPhone = basicPhone;
    }

    @Override
    public String getName() {
        return basicPhone.getName();
    }

    @Override
    public int getCameraCount() {
        return basicPhone.getCameraCount();
    }

    @Override
    public double getPrice() {
        return basicPhone.getPrice();
    }
}
