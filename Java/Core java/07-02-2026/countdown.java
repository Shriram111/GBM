import java.util.concurrent.CountDownLatch;

public class countdown{
    public static void main(String[] args) throws InterruptedException {

        CountDownLatch latch = new CountDownLatch(3);

        Runnable task = () -> {
            System.out.println("Task completed by " + Thread.currentThread().getName());
            latch.countDown();
        };

        new Thread(task).start();
        new Thread(task).start();
        new Thread(task).start();

        latch.await();
        System.out.println("All tasks completed");
    }
}