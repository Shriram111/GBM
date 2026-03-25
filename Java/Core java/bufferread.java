import java.io.BufferedReader;
import java.io.FileReader;

public class bufferread {
    
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("buffer.txt"));
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
    }
}
