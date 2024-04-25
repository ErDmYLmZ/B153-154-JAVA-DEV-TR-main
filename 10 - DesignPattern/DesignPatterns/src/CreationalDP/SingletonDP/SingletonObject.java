package CreationalDP.SingletonDP;

public class SingletonObject {

    public String message="Merhaba; ";

    private SingletonObject() {    }

    private static SingletonObject instance;//ilk kez çağrıldığında SingletonObject

    public static SingletonObject getInstance(){
        if(instance==null){//metod ilk kez çağrıldığında const ile obje üretilir
            instance=new SingletonObject();
        }
        return instance;
    }

    public void changeMessage(){
        this.message+=" Batch 153..157";
    }

}
