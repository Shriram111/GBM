class qus{
    void start(){
        System.out.println("Whoami ?");
    }

}
class answ extends qus{
    void abc(){
        System.out.println("abc");
    }

}
class answw extends qus{
    void xyz(){
        System.out.println("xyz");
    }

}
public class hiera {
    public static void main(String[] args) {
        answ a = new answ();
        answw b = new answw();
        a.start();
        b.start();

        
    }
    
}
