import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
public class cyclic {
    public static void main(String[] args) {

        CyclicBarrier barrier = new CyclicBarrier(3,
                () -> System.out.println("All threads reached barrier"));

        Runnable task = () -> {
            try {
                System.out.println(Thread.currentThread().getName() + " waiting");
                barrier.await();
            } catch (InterruptedException | BrokenBarrierException e) {}
        };

        new Thread(task).start();
        new Thread(task).start();
        new Thread(task).start();
    }
}
    

