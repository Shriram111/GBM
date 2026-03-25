import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class candf {
    public static void main(String[] args) throws ExecutionException, InterruptedException {

        ExecutorService executor = Executors.newSingleThreadExecutor();

        Callable<Integer> task = () -> {
            return 10 + 20;
        };

        Future<Integer> result = executor.submit(task);

        System.out.println("Result: " + result.get());

        executor.shutdown();
    }
}
