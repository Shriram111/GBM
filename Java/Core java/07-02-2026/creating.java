class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running using Thread class");
    }
}
public class creating {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start();
    }
}
    

