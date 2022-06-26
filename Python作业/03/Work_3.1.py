chip=str("薯片")
water=str("水")
computer=str("电脑")

value_chip=float(3.00)
value_water=float(2.00)
value_computer=float(2000.00)

count_chip=int(input("请输入薯片的数量\n>>"))
count_water=int(input("请输入水的数量\n>>"))
count_computer=int(input("请输入电脑的数量\n>>"))

money=float(value_chip*count_chip)+(value_water*count_water)+(value_computer*count_computer)
print("总价为"+str(money)+"元")

# 程序作者 快速的飓风.
# 于 2019.10.07
# 严禁抄袭
