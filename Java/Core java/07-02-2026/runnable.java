class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread running using Runnable");
    }
}
public class runnable {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
    
}
