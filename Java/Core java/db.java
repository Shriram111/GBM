import java.sql.*;

public class db {
    public static void main(String[] args) throws Exception {

        String url = "jdbc:mysql://localhost:3306/testdb";
        String username = "root";
        String password = "1234";

        Connection con = DriverManager.getConnection(url, username, password);
        System.out.println("Connected Successfully!");

        con.close();
    }
}
