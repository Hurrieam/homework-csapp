package attractions;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

import screen.Screen;

public class MessageWindow extends JFrame {
	public MessageWindow(String title, String messageText) {
		this.setTitle(title);
		this.setVisible(true);
		this.setLayout(new BorderLayout());
		this.setResizable(false);
		this.setBounds(Screen.width / 2 - 150, Screen.height / 2 - 50, 300, 100);
		
		JLabel message = new JLabel(messageText);
		this.add(message, BorderLayout.CENTER);
		
		JButton btn_OK = new JButton("บร");
		this.add(btn_OK, BorderLayout.SOUTH);
		btn_OK.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				setVisible(false);
			}
			
		});
	}
}
