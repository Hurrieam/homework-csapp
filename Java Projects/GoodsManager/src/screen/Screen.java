package screen;

import java.awt.Toolkit;

public abstract class Screen extends Toolkit {
	public static int height = getDefaultToolkit().getScreenSize().height;
	public static int width = getDefaultToolkit().getScreenSize().width;
}
