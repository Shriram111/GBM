import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class PrinterGUI extends JFrame {

    private JComboBox<String> printerBox, modeBox;
    private JTextArea textArea;
    private JTable historyTable;
    private DefaultTableModel tableModel;

    public PrinterGUI() {

        setTitle("Printer Application");
        setSize(800, 500);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Top Panel
        JPanel top = new JPanel(new GridLayout(2, 2, 10, 10));
        printerBox = new JComboBox<>(new String[]{"Inkjet", "Laser", "DotMatrix"});
        modeBox = new JComboBox<>(new String[]{"Color", "BlackWhite"});

        top.add(new JLabel("Printer:"));
        top.add(printerBox);
        top.add(new JLabel("Mode:"));
        top.add(modeBox);

        // Text Area
        textArea = new JTextArea(6, 40);

        // Buttons
        JButton uploadBtn = new JButton("Upload File");
        JButton addQueueBtn = new JButton("Add to Queue");
        JButton printBtn = new JButton("Print Queue");

        JPanel btnPanel = new JPanel();
        btnPanel.add(uploadBtn);
        btnPanel.add(addQueueBtn);
        btnPanel.add(printBtn);

        // Table
        tableModel = new DefaultTableModel(
                new String[]{"Printer", "Mode", "Document", "Date & Time"}, 0);
        historyTable = new JTable(tableModel);

        add(top, BorderLayout.NORTH);
        add(new JScrollPane(textArea), BorderLayout.CENTER);
        add(btnPanel, BorderLayout.SOUTH);
        add(new JScrollPane(historyTable), BorderLayout.EAST);

        // Actions
        uploadBtn.addActionListener(e -> uploadFile());
        addQueueBtn.addActionListener(e -> addToQueue());
        printBtn.addActionListener(e -> printQueue());
    }

    private void uploadFile() {
        JFileChooser chooser = new JFileChooser();
        if (chooser.showOpenDialog(this) == JFileChooser.APPROVE_OPTION) {
            File file = chooser.getSelectedFile();
            try (BufferedReader br = new BufferedReader(new FileReader(file))) {
                textArea.read(br, null);
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "File read error");
            }
        }
    }

    private void addToQueue() {

        String text = textArea.getText();
        if (text.isEmpty()) {
            JOptionPane.showMessageDialog(this, "Document is empty!");
            return;
        }

        // ✅ SEND DATA ONLY (NO COMMAND HERE)
        magnager.getInstance().addPrintJob(
                printerBox.getSelectedItem().toString(),
                modeBox.getSelectedItem().toString(),
                text
        );

        tableModel.addRow(new Object[]{
                printerBox.getSelectedItem(),
                modeBox.getSelectedItem(),
                text.length() > 15 ? text.substring(0, 15) + "..." : text,
                LocalDateTime.now().format(
                        DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm"))
        });

        textArea.setText("");
    }

    private void printQueue() {
        magnager.getInstance().processQueue();
        JOptionPane.showMessageDialog(this, "All print jobs completed!");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new PrinterGUI().setVisible(true));
    }
}
