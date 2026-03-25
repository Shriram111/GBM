import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class pooling {
    public static void main(String[] args) {
        ExecutorService pool = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 5; i++) {
            int taskNo = i;
            pool.execute(() -> {
                System.out.println("Task " + taskNo + " executed by " +
                        Thread.currentThread().getName());
            });
        }

        pool.shutdown();
    }
}
    

