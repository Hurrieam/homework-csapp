import random #导入随机数包

#定义初始变量
count=0 #记录游戏次数
guess=0 #记录用户输入

#游戏核心模块
while (guess != -1):
    secret=random.randint(1,100) #每次进行新游戏都生成一个新的随机数
    print("*****猜数字游戏 by Hurrieam*****")
    print("您可随时输入-1退出游戏")
    print("系统生成了一个1~100之间的随机数，请您猜出这个数：")
    while (guess != secret):
        guess=int(input(">>"))
        if (guess == -1):
            print("您已退出游戏，欢迎您下次再玩！")
            exit()
        elif (guess > secret):
            print("您输入的数字【大于】答案，请重新猜：")
            count=count+1
        elif (guess < secret):
            print("您输入的数字【小于】答案，请重新猜：")
            count=count+1
    print("恭喜您，猜中啦！这个数就是"+str(secret))
    count=count+1
    print("您一共猜了"+str(count)+"次")
    guess=int(input("输入任意整数重玩，输入-1退出\n>>"))
print("您已退出游戏，欢迎您下次再玩！")

# Programmed by Hurrieam
# Established on 2019.10.16
# Copying Prohibited
