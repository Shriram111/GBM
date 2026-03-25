import java.util.*;
public class inte {
    public static void main(String[] args) {

        Set<Integer> hashSet = new HashSet<>();
        hashSet.add(30);
        hashSet.add(10);
        hashSet.add(20);
        hashSet.add(10); // duplicate not allowed

        System.out.println("HashSet: " + hashSet);

        Set<Integer> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add(30);
        linkedHashSet.add(10);
        linkedHashSet.add(20);

        System.out.println("LinkedHashSet: " + linkedHashSet);

        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(30);
        treeSet.add(10);
        treeSet.add(20);

        System.out.println("TreeSet (Sorted): " + treeSet);
    }
}
    
