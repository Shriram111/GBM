public class type {
    
    public static printerinterface getPrinter(String type) {
        if (type.equalsIgnoreCase("inkjet"))
            return new injectprinter();
        else if (type.equalsIgnoreCase("laser"))
            return new laserprinter();
        else if (type.equalsIgnoreCase("dotmatrix"))
            return new dotmatrixprinter();
        else
            throw new IllegalArgumentException("Invalid printer type");
    }
    
}
