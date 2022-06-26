def printcoffee(*coffeename):   #定义输出我喜欢的咖啡名称的函数
    print('\n我喜欢的咖啡有：')
    for item in coffeename:
        print(item)   #输出咖啡名称
printcoffee('蓝山')
printcoffee('蓝山','卡布奇诺','土耳其','巴西')
printcoffee('蓝山','曼特宁','摩卡')
