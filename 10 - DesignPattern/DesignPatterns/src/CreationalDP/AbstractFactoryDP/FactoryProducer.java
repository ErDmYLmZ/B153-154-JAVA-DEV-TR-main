package CreationalDP.AbstractFactoryDP;

public class FactoryProducer {

    public static AbstractFactory getFactory(String select){

        if(select.equalsIgnoreCase("SHAPE")){
            return new ShapeFactory();
        } else if (select.equalsIgnoreCase("COLOR")) {
            return new ColorFactory();
        }
        return null;
    }


}
