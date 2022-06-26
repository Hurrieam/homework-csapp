package chess;

public class Toggle {
	// true代表当前状态该黑棋走棋 false代表当前状态该白棋走棋
	private boolean toggle;
	
	public Toggle() {
		// 设定初始状态为黑棋走棋
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
