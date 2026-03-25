import java.sql.Connection;
import java.sql.PreparedStatement;
import java.time.LocalDateTime;
public class history {
    public static void saveHistory(
        String printer,
        String mode,
        String document,
        LocalDateTime time) {

    String sql = "INSERT INTO print_history" +"(printer_type, print_mode, document_text, printed_at) " +"VALUES (?, ?, ?, ?)";

    try (Connection con = dbconnection.getConnection();
         PreparedStatement ps = con.prepareStatement(sql)) {

        ps.setString(1, printer);
        ps.setString(2, mode);
        ps.setString(3, document);
        ps.setObject(4, time);

        ps.executeUpdate();

    } catch (Exception e) {
        e.printStackTrace();
    }
}
}
    
