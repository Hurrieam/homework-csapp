step=int(0)
count=int(0)

while True:
    print("*****跳一跳 by Hurrieam*****\n按数字决定向前跳的步数\n【当前分数】"+str(count))
    step=int(input("\n>>"))
    if(step<0):
        print("【不能往后跳哦，请重新输入吧~】")
    elif(step==0):
        print("【您没有往前跳哦，请重新输入吧~】")
    elif(step>0 and step<=5):
        count=count+step
    elif(step>5):
        print("【您一次跳太远了哦，请重新输入吧~】")
    else:
        print("【您的输入有误，请检查后重新输入！】")

# Programmed by Hurrieam
# Established on 2019.10.16
# Copying Prohibited
