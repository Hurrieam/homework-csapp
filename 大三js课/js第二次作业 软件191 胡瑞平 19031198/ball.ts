/*
 * js第二次作业 软件191 胡瑞平 19031198
 */

for (var red: number = 0; red <= 100; red++) {
    for (var white: number = 0; white <= 100; white++) {
        for (var black: number = 0; black <= 100; black++) {
            if (red + white == 25 && white + black == 31 && red + black == 28) {
                console.log("red=" + red + "\nwhite=" + white + "\nblack=" + black);
            }
        }
    }
}