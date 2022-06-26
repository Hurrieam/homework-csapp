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
		Toggle toggle = new Toggle(); // ³õÊ¼×´Ì¬ÎªºÚÆå×ßÆå
		Black black = new Black();
		White white = new White();
		myPlate.display();
		while(true) {
			System.out.print("ÐÐºÅ >>");
			posX = in.nextInt() - 1;
			System.out.print("ÁÐºÅ >>");
			posY = in.nextInt() - 1;
			// ÂÖµ½ºÚÆå
			if(toggle.getToggle() == true) {
				black.Go(posX, posY, myPlate);
			}
			// ÂÖµ½°×Æå
			if(toggle.getToggle() == false) {
				white.Go(posX, posY, myPlate);
			}
			myPlate.display();
			toggle.switchToggle();
		}
	}
}
