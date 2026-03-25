public class jobcoomand implements command{
    private printerinterface printer;
    private printstratergy strategy;
    private String document;

    public jobcoomand(printerinterface printer, printstratergy strategy, String document) {
        this.printer = printer;
        this.strategy = strategy;
        this.document = document;
    }

    @Override
    public void execute() {
        strategy.applyPrint();
        printer.print(document);
        System.out.println("Print completed\n");
    }
    
}
