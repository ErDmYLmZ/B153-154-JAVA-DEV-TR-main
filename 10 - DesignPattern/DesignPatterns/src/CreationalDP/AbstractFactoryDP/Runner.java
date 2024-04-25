package CreationalDP.AbstractFactoryDP;

public class Runner {
    public static void main(String[] args) {

        AbstractFactory shapeFactory=FactoryProducer.getFactory("SHAPE");
        Shape shape=shapeFactory.getShape("kare");
        shape.draw();


        AbstractFactory colorFactory=FactoryProducer.getFactory("COLOR");
        Color color=colorFactory.getColor("mavi");
        color.fill();


      //  FactoryProducer.getFactory("COLOR").getColor("mavi").fill();





    }
}
