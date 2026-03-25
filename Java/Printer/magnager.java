public class magnager {

    private static magnager instance;
    private queue printQueue = new queue();

    private magnager() {}

    public static magnager getInstance() {
        if (instance == null) {
            instance = new magnager();
        }
        return instance;
    }

    // ADD PRINT JOB (DATA ONLY)
    public void addPrintJob(String printer, String mode, String document) {
        printQueue.addJob(printer, mode, document);
    }

    // PROCESS PRINT QUEUE
    public void processQueue() {
        printQueue.processJobs();
    }
}
