INPUT = str("-1")

while (INPUT != "0"):
    print("欢迎致电10086自助查询系统 by Hurrieam")
    print("1 查询当前余额")
    print("2 查询剩余流量")
    print("3 查询剩余通话时间")
    print("0 退出自助查询系统")
    
    INPUT = str(input(">>"))
    
    if (INPUT == "1"):
        print("您当前剩余余额为20.86元\n")
    elif (INPUT == "2"):
        print("您当前剩余流量为3.08GB\n")
    elif (INPUT == "3"):
        print("您当前剩余通话时间为23分钟\n")
    elif (INPUT == "0"):
        print("您已成功退出系统，欢迎您再次使用！")
    else:
        print("您的输入有误，请重新输入！\n")

# Programmed by Hurrieam
# Established on 2019.10.16
# Copying Prohibited
