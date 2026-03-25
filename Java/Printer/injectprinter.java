public class injectprinter implements printerinterface {
        @Override
        public void print(String document){
            System.out.println("Inkjet Printer printing: " + document);
        }
    
}
