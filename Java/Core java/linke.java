import java.util.*;
public class linke {
    public static void main(String[] args) {
    List<String> arrayList = new ArrayList<>();
    arrayList.add("Java");
    arrayList.add("Python");
    arrayList.add("Java"); // duplicate allowed

    System.out.println("ArrayList: " + arrayList);

    // LinkedList
    List<Integer> linkedList = new LinkedList<>();
    linkedList.add(10);
    linkedList.add(20);
    linkedList.add(30);

    System.out.println("LinkedList: " + linkedList);
}
}
