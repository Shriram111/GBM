import javax.swing.*;
import java.awt.*;

public class ATMSoftware extends JFrame {

    CardLayout cardLayout;
    JPanel mainPanel;

    final int CORRECT_PIN = 1234;

    double savingsBalance = 30000;
    double currentBalance = 15000;
    double activeBalance;

    JLabel infoLabel;
    JLabel timerLabel;
    JPasswordField pinField;
    JTextField amountField, depositField;

    Timer screenTimer;
    Timer countdownTimer;
    int timeLeft = 60;

    final int SCREEN_TIMEOUT = 60000; // 60 seconds

    // Fonts & Colors
    Font titleFont = new Font("Segoe UI", Font.BOLD, 22);
    Font textFont = new Font("Segoe UI", Font.PLAIN, 16);
    Color cardColor = new Color(40, 40, 60);
    Color btnColor = new Color(70, 130, 180);
    Color textColor = Color.WHITE;

    public ATMSoftware() {
        setTitle("ATM Machine");
        setSize(480, 400);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        cardLayout = new CardLayout();
        mainPanel = new JPanel(cardLayout);

        mainPanel.add(cardScreen(), "CARD");
        mainPanel.add(pinScreen(), "PIN");
        mainPanel.add(accountScreen(), "ACCOUNT");
        mainPanel.add(menuScreen(), "MENU");
        mainPanel.add(balanceScreen(), "BALANCE");
        mainPanel.add(withdrawScreen(), "WITHDRAW");
        mainPanel.add(depositScreen(), "DEPOSIT");

        add(mainPanel);
        cardLayout.show(mainPanel, "CARD");

        startScreenTimer();
    }

    // 1. Insert Card
    JPanel cardScreen() {
        JPanel p = cardPanel();
        JButton btn = button("Insert Card");

        btn.addActionListener(e -> {
            playClickSound();
            cardLayout.show(mainPanel, "PIN");
            resetTimer();
        });

        p.add(titleLabel("Insert Your Card"));
        p.add(btn);
        p.add(timerLabel());
        return p;
    }

    // 2. PIN Login
    JPanel pinScreen() {
        JPanel p = cardPanel();
        pinField = new JPasswordField(4);
        styleField(pinField);

        JButton btn = button("Verify PIN");

        btn.addActionListener(e -> {
            playClickSound();
            try {
                int pin = Integer.parseInt(new String(pinField.getPassword()));
                if (pin == CORRECT_PIN) {
                    cardLayout.show(mainPanel, "ACCOUNT");
                    resetTimer();
                } else {
                    playAlarmSound();
                    JOptionPane.showMessageDialog(this, "Wrong PIN");
                }
            } catch (Exception ex) {
                playAlarmSound();
                JOptionPane.showMessageDialog(this, "Enter valid PIN");
            }
        });

        p.add(titleLabel("Enter PIN"));
        p.add(pinField);
        p.add(btn);
        p.add(timerLabel());
        return p;
    }

    // 3. Account Selection
    JPanel accountScreen() {
        JPanel p = cardPanel();

        JButton savings = button("Savings Account");
        JButton current = button("Current Account");

        savings.addActionListener(e -> {
            playClickSound();
            activeBalance = savingsBalance;
            cardLayout.show(mainPanel, "MENU");
            resetTimer();
        });

        current.addActionListener(e -> {
            playClickSound();
            activeBalance = currentBalance;
            cardLayout.show(mainPanel, "MENU");
            resetTimer();
        });

        p.add(titleLabel("Select Account"));
        p.add(savings);
        p.add(current);
        p.add(timerLabel());
        return p;
    }

    // 4. Menu
    JPanel menuScreen() {
        JPanel p = cardPanel();

        JButton bal = button("Check Balance");
        JButton withdraw = button("Withdraw Cash");
        JButton deposit = button("Deposit Cash");

        bal.addActionListener(e -> {
            playClickSound();
            infoLabel.setText("Balance : Rs. " + activeBalance);
            cardLayout.show(mainPanel, "BALANCE");
            resetTimer();
        });

        withdraw.addActionListener(e -> {
            playClickSound();
            cardLayout.show(mainPanel, "WITHDRAW");
            resetTimer();
        });

        deposit.addActionListener(e -> {
            playClickSound();
            cardLayout.show(mainPanel, "DEPOSIT");
            resetTimer();
        });

        p.add(titleLabel("ATM Menu"));
        p.add(bal);
        p.add(withdraw);
        p.add(deposit);
        p.add(timerLabel());
        return p;
    }

    // 5. Balance
    JPanel balanceScreen() {
        JPanel p = cardPanel();
        infoLabel = titleLabel("");
        JButton back = button("Back");

        back.addActionListener(e -> {
            playClickSound();
            cardLayout.show(mainPanel, "MENU");
            resetTimer();
        });

        p.add(infoLabel);
        p.add(back);
        p.add(timerLabel());
        return p;
    }

    // 6. Withdraw
    JPanel withdrawScreen() {
        JPanel p = cardPanel();
        amountField = new JTextField();
        styleField(amountField);

        JButton withdraw = button("Withdraw");

        withdraw.addActionListener(e -> {
            playClickSound();

            if (!verifyPinAgain()) {
                playAlarmSound();
                JOptionPane.showMessageDialog(this, "Wrong PIN");
                return;
            }

            try {
                double amt = Double.parseDouble(amountField.getText());
                if (amt > 0 && amt <= activeBalance) {
                    activeBalance -= amt;
                    infoLabel.setText("Collect Cash\nBalance : Rs. " + activeBalance);
                    cardLayout.show(mainPanel, "BALANCE");
                    resetTimer();
                } else {
                    JOptionPane.showMessageDialog(this, "Insufficient Balance");
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Enter valid amount");
            }
        });

        p.add(titleLabel("Withdraw Amount"));
        p.add(amountField);
        p.add(withdraw);
        p.add(timerLabel());
        return p;
    }

    // 7. Deposit
    JPanel depositScreen() {
        JPanel p = cardPanel();
        depositField = new JTextField();
        styleField(depositField);

        JButton deposit = button("Deposit");

        deposit.addActionListener(e -> {
            playClickSound();

            if (!verifyPinAgain()) {
                playAlarmSound();
                JOptionPane.showMessageDialog(this, "Wrong PIN");
                return;
            }

            try {
                double amt = Double.parseDouble(depositField.getText());
                if (amt > 0) {
                    activeBalance += amt;
                    infoLabel.setText("Amount Deposited\nBalance : Rs. " + activeBalance);
                    cardLayout.show(mainPanel, "BALANCE");
                    resetTimer();
                } else {
                    JOptionPane.showMessageDialog(this, "Enter valid amount");
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(this, "Enter valid amount");
            }
        });

        p.add(titleLabel("Deposit Amount"));
        p.add(depositField);
        p.add(deposit);
        p.add(timerLabel());
        return p;
    }

    // PIN verify again
    boolean verifyPinAgain() {
        JPasswordField pf = new JPasswordField();
        int opt = JOptionPane.showConfirmDialog(this, pf, "Re-enter PIN",
                JOptionPane.OK_CANCEL_OPTION);
        try {
            return opt == JOptionPane.OK_OPTION &&
                    Integer.parseInt(new String(pf.getPassword())) == CORRECT_PIN;
        } catch (Exception e) {
            return false;
        }
    }

    // TIMER LOGIC
    void startScreenTimer() {
        if (screenTimer != null) screenTimer.stop();
        if (countdownTimer != null) countdownTimer.stop();

        timeLeft = 60;
        timerLabel.setText("Time left : 60 sec");

        countdownTimer = new Timer(1000, e -> {
            timeLeft--;
            timerLabel.setText("Time left : " + timeLeft + " sec");
        });
        countdownTimer.start();

        screenTimer = new Timer(SCREEN_TIMEOUT, e -> {
            playAlarmSound();
            JOptionPane.showMessageDialog(this, "Session Timeout");
            cardLayout.show(mainPanel, "CARD");
        });
        screenTimer.setRepeats(false);
        screenTimer.start();
    }

    void resetTimer() {
        startScreenTimer();
    }

    // Sounds
    void playClickSound() {
        Toolkit.getDefaultToolkit().beep();
    }

    void playAlarmSound() {
        new Thread(() -> {
            for (int i = 0; i < 6; i++) {
                Toolkit.getDefaultToolkit().beep();
                try { Thread.sleep(500); } catch (Exception ignored) {}
            }
        }).start();
    }

    // UI helpers
    JPanel cardPanel() {
        JPanel p = new JPanel(new GridLayout(0, 1, 12, 12));
        p.setBackground(cardColor);
        p.setBorder(BorderFactory.createEmptyBorder(25, 25, 25, 25));
        return p;
    }

    JLabel timerLabel() {
        timerLabel = new JLabel("Time left : 60 sec", JLabel.CENTER);
        timerLabel.setForeground(Color.YELLOW);
        timerLabel.setFont(textFont);
        return timerLabel;
    }

    JButton button(String text) {
        JButton b = new JButton(text);
        b.setFont(textFont);
        b.setBackground(btnColor);
        b.setForeground(Color.WHITE);
        return b;
    }

    JLabel titleLabel(String text) {
        JLabel l = new JLabel(text, JLabel.CENTER);
        l.setFont(titleFont);
        l.setForeground(textColor);
        return l;
    }

    void styleField(JTextField f) {
        f.setFont(textFont);
        f.setHorizontalAlignment(JTextField.CENTER);
    }

    public static void main(String[] args) {
        new ATMSoftware().setVisible(true);
    }
}
