import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class queue {

    // ADD PRINT JOB TO DATABASE
    public void addJob(String printer, String mode, String document) {

        String sql =
            "INSERT INTO print_queue (printer_type, mode, document, status) " +
            "VALUES (?, ?, ?, 'PENDING')";

        try (Connection con = dbconnection.getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {

            ps.setString(1, printer);
            ps.setString(2, mode);
            ps.setString(3, document);
            ps.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // PROCESS ALL PENDING PRINT JOBS
    public void processJobs() {

        String selectSQL =
            "SELECT * FROM print_queue WHERE status = 'PENDING'";

        String updateSQL =
            "UPDATE print_queue SET status = 'DONE' WHERE id = ?";

        try (Connection con = dbconnection.getConnection();
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery(selectSQL)) {

            while (rs.next()) {

                int id = rs.getInt("id");
                String printerType = rs.getString("printer_type");
                String mode = rs.getString("mode");
                String document = rs.getString("document");

                // FACTORY + STRATEGY
                printerinterface printer =
                        type.getPrinter(printerType);

                printstratergy strategy =
                        mode.equals("Color")
                                ? new color()
                                : new blackwhite();

                // COMMAND
                command cmd =
                        new jobcoomand(printer, strategy, document);

                cmd.execute();

                // MARK JOB AS DONE
                try (PreparedStatement ps =
                             con.prepareStatement(updateSQL)) {
                    ps.setInt(1, id);
                    ps.executeUpdate();
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
