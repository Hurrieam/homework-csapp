def main():
    while True:
        datanum_current = 0  # 当前数据个数
        datanum_current_temp = datanum_current + 1  # 临时变量
        x = []  # 横坐标
        y = []  # 纵坐标

        datanum_sum = 0  # 数据总量

        try:
            print("输入数据总量：一个(x, y)坐标算一个数据", end="")
            datanum_sum = int(input())
            for i in range(0, datanum_sum * 2, 1):
                # 若当前数据个数为偶数 则下一步输入的是x的值
                if datanum_current % 2 == 0:
                    print("输入x[%d]：" % datanum_current_temp, end="")
                    data = float(input())
                    x.append(data)

                # 若当前数据个数为奇数 则下一步输入的是y的值
                elif datanum_current % 2 != 0:
                    print("输入y[%d]：" % datanum_current_temp, end="")
                    data = float(input())
                    y.append(data)
                    datanum_current_temp = datanum_current_temp + 1
                datanum_current = datanum_current + 1

            print("x =", x, "\ny =", y)

            x_avg = sum(x) / len(x)
            y_avg = sum(y) / len(y)
            print("x_avg =", x, "\ny_avg =", y)

            break

        except:
            print("输入错误 请重新输入")
            continue


if __name__ == "__main__":
    main()
