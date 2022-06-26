package login;

import screen.Screen;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

import attractions.MessageWindow;

public class Login extends JFrame {
	private String accountName = "Admin";
	private String passcode = "123456";
	
	public Login() {
		this.setTitle("飓风货品管理系统");
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setVisible(true);
		this.setBounds(Screen.width / 2 - 225, Screen.height / 2 - 150, 450, 300);
		this.setLayout(null);
		this.setResizable(false);
		
		JLabel accountName_lbl = new JLabel("用户名");
		accountName_lbl.setBounds(50, 50, 50, 15);
		this.add(accountName_lbl);
		
		JTextField accountName_input = new JTextField();
		accountName_input.setBounds(100, 35, 100, 50);
		this.add(accountName_input);
		accountName_input.setVisible(false);
		accountName_input.setVisible(true);
		
		JLabel passcode_lbl = new JLabel("  密码");
		passcode_lbl.setBounds(50, 150, 50, 15);
		this.add(passcode_lbl);
		passcode_lbl.setVisible(false);
		passcode_lbl.setVisible(true);
		
		JTextField passcode_input = new JTextField();
		passcode_input.setBounds(100, 135, 100, 50);
		this.add(passcode_input);
		passcode_input.setVisible(false);
		passcode_input.setVisible(true);
		
		JButton login_btn = new JButton("登录");
		login_btn.setBounds(250, 150, 75, 40);
		this.add(login_btn);
		login_btn.setVisible(false);
		login_btn.setVisible(true);
		login_btn.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				if(accountName_input.getText().equals(accountName) && passcode_input.getText().equals(passcode)) {
					System.out.println("登录成功！");
				} else {
					MessageWindow login_success = new MessageWindow("提示", "登陆失败");
				}
			}

			
		});
		
		JButton exit_btn = new JButton("退出");
		exit_btn.setBounds(350, 150, 75, 40);
		this.add(exit_btn);
		exit_btn.setVisible(false);
		exit_btn.setVisible(true);
		exit_btn.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				System.exit(0);
			}
			
		});
	}
}
