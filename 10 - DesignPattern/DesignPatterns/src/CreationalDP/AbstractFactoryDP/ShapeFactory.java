package CreationalDP.AbstractFactoryDP;

public class ShapeFactory implements AbstractFactory{

    @Override
    public Color getColor(String color) {
        return null;
    }

    public Shape getShape(String shapeType){//enumType kullanmak gerekirdi

        if (shapeType.equalsIgnoreCase("üçgen")){
            return new Triangle("üçgen",60,3);
        } else if (shapeType.equalsIgnoreCase("kare")) {
            return new Square("kare",90,4);
        } else if (shapeType.equalsIgnoreCase("beşgen")) {
            return new Pentagon("beşgen",108,5);
        }
        return null;
    }


}
