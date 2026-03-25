public class laserprinter implements printerinterface {
    @Override
    public void print(String document) {
        System.out.println("Laser Printer printing: " + document);
    }
    
}
