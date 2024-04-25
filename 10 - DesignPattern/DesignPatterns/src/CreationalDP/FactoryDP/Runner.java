package CreationalDP.FactoryDP;

public class Runner {
    public static void main(String[] args) {

        Shape triangle=new Triangle("üçgen",60,3);
        triangle.draw();

        Shape square=new Square("kare",90,4);
        square.draw();

        Shape pentagon=new Pentagon("beşgen",108,5);
        pentagon.draw();

        System.out.println("--------------------------------------------------");

        Shape shape1=ShapeFactory.getShape("üçgen");
        shape1.draw();

        Shape shape2=ShapeFactory.getShape("kare");
        shape2.draw();



    }
}
