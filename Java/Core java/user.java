import java.io.*;

// Serializable class
class member implements Serializable {
    String username;
    transient String password;   // will NOT be serialized

    member(String u, String p) {
        username = u;
        password = p;
    }
}

public class user {
    public static void main(String[] args) {

        // ---------- Serialization ----------
        try {
            member mem = new member("Shriram", "secret123");

            ObjectOutputStream oos =
                    new ObjectOutputStream(new FileOutputStream("mem.ser"));
            oos.writeObject(mem);
            oos.close();

            System.out.println("Object Serialized Successfully");
        } catch (Exception e) {
            e.printStackTrace();
        }

        // ---------- Deserialization ----------
        try {
            ObjectInputStream ois =
                    new ObjectInputStream(new FileInputStream("mem.ser"));
            member u = (member) ois.readObject();
            ois.close();

            System.out.println("\nAfter Deserialization:");
            System.out.println("Username : " + u.username);
            System.out.println("Password : " + u.password); // null
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
