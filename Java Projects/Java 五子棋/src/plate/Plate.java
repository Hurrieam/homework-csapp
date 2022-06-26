package plate;

import chess.Chess;
import chess.Color;

public class Plate {

	// 棋盘大小
	private final int size;

	// 棋盘的实现 0无子 1黑子 2白子
	private Chess[][] plate;

	public Plate(int size) {
		// 创建棋盘
		this.size = size;
		this.plate = new Chess[this.size][this.size];

		// 初始化棋盘
		for (int line = 0; line < this.plate.length; line++) {
			for (int column = 0; column < this.plate.length; column++) {
				this.plate[line][column] = new Chess();
				this.plate[line][column].setColor(Color.NO_CHESS);
			}
		}
	}

	public void display() {
		// 打印列号
		System.out.print("  ");
		for (int column = 1; column <= this.plate.length; column++) {
			if (column + 1 < 10) {
				System.out.print(" " + column);
			} else {
				System.out.print(column);
			}
		}
		System.out.print("\n");

		// 开始打印棋盘
		for (int line = 0; line < this.plate.length; line++) {
			if (line + 1 < 10) {
				System.out.print(" " + (line + 1));
			} else {
				System.out.print(line + 1);
			}
			for (int column = 0; column < this.plate.length; column++) {
				if (this.plate[line][column].getColor() == Color.NO_CHESS) {
					System.out.print("无");
				} else if (this.plate[line][column].getColor() == Color.BLACK_CHESS) {
					System.out.print("黑");
				} else if (this.plate[line][column].getColor() == Color.WHITE_CHESS) {
					System.out.print("白");
				}
			}
			System.out.print("\n");
		}
	}
	
	public Chess[][] getPlate() {
		return this.plate;
	}
}
