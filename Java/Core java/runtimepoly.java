class parent{
    void show(){
        System.out.println("Hello my name is Shriram");
    }

}
class child extends parent{
    @Override
    void show(){
        System.out.println(("My surname is Gunjal"));
    }

}
public class runtimepoly {
    public static void main(String[] args) {
        parent p =new child();
        p.show();
    }
    
}
