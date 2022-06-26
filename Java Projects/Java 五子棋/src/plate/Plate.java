package plate;

import chess.Chess;
import chess.Color;

public class Plate {

	// ���̴�С
	private final int size;

	// ���̵�ʵ�� 0���� 1���� 2����
	private Chess[][] plate;

	public Plate(int size) {
		// ��������
		this.size = size;
		this.plate = new Chess[this.size][this.size];

		// ��ʼ������
		for (int line = 0; line < this.plate.length; line++) {
			for (int column = 0; column < this.plate.length; column++) {
				this.plate[line][column] = new Chess();
				this.plate[line][column].setColor(Color.NO_CHESS);
			}
		}
	}

	public void display() {
		// ��ӡ�к�
		System.out.print("  ");
		for (int column = 1; column <= this.plate.length; column++) {
			if (column + 1 < 10) {
				System.out.print(" " + column);
			} else {
				System.out.print(column);
			}
		}
		System.out.print("\n");

		// ��ʼ��ӡ����
		for (int line = 0; line < this.plate.length; line++) {
			if (line + 1 < 10) {
				System.out.print(" " + (line + 1));
			} else {
				System.out.print(line + 1);
			}
			for (int column = 0; column < this.plate.length; column++) {
				if (this.plate[line][column].getColor() == Color.NO_CHESS) {
					System.out.print("��");
				} else if (this.plate[line][column].getColor() == Color.BLACK_CHESS) {
					System.out.print("��");
				} else if (this.plate[line][column].getColor() == Color.WHITE_CHESS) {
					System.out.print("��");
				}
			}
			System.out.print("\n");
		}
	}
	
	public Chess[][] getPlate() {
		return this.plate;
	}
}
