import java.io.*;
import java.io.Serializable;

class Student implements Serializable {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

public class ser {
    public static void main(String[] args) throws Exception {
        Student s = new Student(101, "Shriram");

        ObjectOutputStream oos =
            new ObjectOutputStream(new FileOutputStream("student.ser"));
        oos.writeObject(s);
        oos.close();

        System.out.println("Object Serialized");
    }
}
