package chess;

public class Toggle {
	// true����ǰ״̬�ú������� false����ǰ״̬�ð�������
	private boolean toggle;
	
	public Toggle() {
		// �趨��ʼ״̬Ϊ��������
		this.toggle = true;
	}
	
	public boolean getToggle() {
		return this.toggle;
	}
	
	public void setToggle(boolean toogle) {
		this.toggle = toggle;
	}
	
	public void switchToggle() {
		this.toggle = !this.toggle;
	}
}
