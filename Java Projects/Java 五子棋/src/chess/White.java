package chess;

import plate.Plate;

public class White extends Chess {
	private Color color;
	
	public White() {
		this.color = Color.WHITE_CHESS;
	}
	
	public void setColor(Color color) {
		this.color = color;
	}
	
	public Color getColor() {
		return this.color;
	}
	
	// Âä×Ó
	public void Go(int posX, int posY, Plate plate) {
		plate.getPlate()[posX][posY].setColor(this.getColor());
	}
}
