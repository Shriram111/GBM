import java.util.*;
import java.util.ArrayList;

public class iterator {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Mango");

        Iterator<String> it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
    

