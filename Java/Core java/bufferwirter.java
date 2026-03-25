import java.io.BufferedWriter;
import java.io.FileWriter;

public class bufferwirter {
    public static void main(String[] args) throws Exception {
        BufferedWriter bw = new BufferedWriter(new FileWriter("buffer.txt"));
        bw.write("Buffered Writer Example");
        bw.newLine();
        bw.write("Java I/O");
        bw.close();
        System.out.println("Buffered write completed");
    }
    
}
