class parent{
    void show(){
        System.out.println("this is a parnet class method");
    }
}
class child extends parent{
    @Override
    void show(){
        System.out.println("this is a child class method");
    }
    
}
public class methodoverinheritance {
    public static void main(String[] args) {
        parent p = new child();
        p.show();
        
    }
    
}
