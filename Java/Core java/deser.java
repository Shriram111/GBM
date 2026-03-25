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

public class deser {
    public static void main(String[] args) throws Exception {
        ObjectInputStream ois =
            new ObjectInputStream(new FileInputStream("student.ser"));
        Student s = (Student) ois.readObject();
        ois.close();

        System.out.println(s.id + " " + s.name);
    }
}
