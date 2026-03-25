import java.io.FileWriter;
public class filereadwrite {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("sample.txt");
        fw.write("Hello Java FileWriter");
        fw.close();
        System.out.println("Data written successfully");
    }
    
}
