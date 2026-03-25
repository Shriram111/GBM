class animal{
    void eat(){
        System.out.println("Animal is eating");

    }

}
class dog extends animal{
    void bark(){
        System.out.println("Dog is barking");
    }

}
public class singleinheritance {
    public static void main(String[] args) {
        dog d =new dog();
        d.bark();
        d.eat();

    }
    
}
