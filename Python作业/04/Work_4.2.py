power=0

walk=1
value=5
pay=10
online=15
bike=20

guest=str("-1")

while True:
    print("欢迎使用蚂蚁森林")
    print("1 走步")
    print("2 生活缴费")
    print("3 线下支付")
    print("4 网络购票")
    print("5 共享单车")
    print("0 退出")
    
    guest=str(input(">>"))
    if(guest=="1"):
        power=power+walk
        print("您的积分是"+str(power))
    if(guest=="2"):
        power=power+value
        print("您的积分是"+str(power))
    if(guest=="3"):
        power=power+pay
        print("您的积分是"+str(power))
    if(guest=="4"):
        power=power+online
        print("您的积分是"+str(power))
    if(guest=="5"):
        power=power+bike
        print("您的积分是"+str(power))
    if(guest=="0"):
        break
print("您已退出")

# Programmed by Hurrieam
# Established on 2019.10.16
# Copying Prohibited
