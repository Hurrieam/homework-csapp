package com;

import plate.Plate;

import java.util.Scanner;

import chess.Black;
import chess.Toggle;
import chess.White;

public class Activities {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int posX, posY;
		Plate myPlate = new Plate(19);
		Toggle toggle = new Toggle(); // ��ʼ״̬Ϊ��������
		Black black = new Black();
		White white = new White();
		myPlate.display();
		while(true) {
			System.out.print("�к� >>");
			posX = in.nextInt() - 1;
			System.out.print("�к� >>");
			posY = in.nextInt() - 1;
			// �ֵ�����
			if(toggle.getToggle() == true) {
				black.Go(posX, posY, myPlate);
			}
			// �ֵ�����
			if(toggle.getToggle() == false) {
				white.Go(posX, posY, myPlate);
			}
			myPlate.display();
			toggle.switchToggle();
		}
	}
}
