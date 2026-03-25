import java.util.*;
public class map {
    public static void main(String[] args) {

        Map<Integer, String> hashMap = new HashMap<>();
        hashMap.put(3, "C");
        hashMap.put(1, "Java");
        hashMap.put(2, "Python");

        System.out.println("HashMap: " + hashMap);

        Map<Integer, String> linkedHashMap = new LinkedHashMap<>();
        linkedHashMap.put(3, "C");
        linkedHashMap.put(1, "Java");
        linkedHashMap.put(2, "Python");

        System.out.println("LinkedHashMap: " + linkedHashMap);

        Map<Integer, String> treeMap = new TreeMap<>();
        treeMap.put(3, "C");
        treeMap.put(1, "Java");
        treeMap.put(2, "Python");

        System.out.println("TreeMap (Sorted): " + treeMap);

        Hashtable<Integer, String> hashtable = new Hashtable<>();
        hashtable.put(1, "A");
        hashtable.put(2, "B");

        System.out.println("Hashtable: " + hashtable);
    }
}
    

