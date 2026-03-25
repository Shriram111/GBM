public class nestedternary {
    public static void main(String[] args) {
        int a=10 ,b=20,c=30;
        int largest =(a>b) ? ((a>c)?a:c) : ((b>c)?b:c);
        System.out.println("largest number "+largest);
    }
    
}
