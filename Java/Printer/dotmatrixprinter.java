public class dotmatrixprinter implements printerinterface {
    @Override
    public void print(String document) {
        System.out.println("Dot Matrix Printer printing: " + document);
    }
}
