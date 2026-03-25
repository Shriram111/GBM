class vehicle{
    void start(){
        System.out.println("Type of vehicle");
    }

}
class car extends vehicle{
    void drive(){
        System.out.println("I want a car");
    }

}
class ev extends car{
    void type(){
        System.out.println("That is Electronic car");
    }

}
public class multiinheritance {
    public static void main(String[] args) {
        ev e =new ev();
        e.start();
        e.drive();
        e.type();
        
    }
    
}
