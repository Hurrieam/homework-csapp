def printsign(**sign) :                  #定义输出姓名和星座的函数
    print()                                     #输出一个空行
    for key, value in sign.items():  #遍历字典
        print("["+key+"]的星座是："+ value)  #输出组合后的信息
dict1={'绮梦':'水瓶座','冷伊一':'射手座','香凝':'双鱼座'}
printsign(**dict1)
