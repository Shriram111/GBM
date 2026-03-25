import java.util.concurrent.Semaphore;

public class seam {
    static Semaphore semaphore = new Semaphore(2);

    public static void main(String[] args) {
        Runnable task = () -> {
            try {
                semaphore.acquire();
                System.out.println(Thread.currentThread().getName() + " acquired permit");
                Thread.sleep(1000);
                semaphore.release();
            } catch (Exception e) {}
        };

        for (int i = 1; i <= 5; i++) {
            new Thread(task).start();
        }
    }
    
}
