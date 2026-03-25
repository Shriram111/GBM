class Shared {
    int data;
    boolean available = false;

    synchronized void produce(int value) throws InterruptedException {
        while (available)
            wait();

        data = value;
        System.out.println("Produced: " + data);
        available = true;
        notify();
    }

    synchronized int consume() throws InterruptedException {
        while (!available)
            wait();

        System.out.println("Consumed: " + data);
        available = false;
        notify();
        return data;
    }
}

public class interthread {
    public static void main(String[] args) {
        Shared s = new Shared();

        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++)
                    s.produce(i);
            } catch (Exception e) {}
        });

        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 5; i++)
                    s.consume();
            } catch (Exception e) {}
        });

        producer.start();
        consumer.start();
    }
}
