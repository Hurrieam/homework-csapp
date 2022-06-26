money=float(input("付费金额："))
if money > 0 and money < 100:
    print("应付款金额"+str(money))
if money >= 100 and money < 200:
    print("应付款金额"+str(money*0.9))
if money >= 200 and money < 500:
    print("应付款金额"+str(money*0.85))
if money >= 500 and money < 1000:
    print("应付款金额"+str(money*0.8))
if money >= 1000:
    print("应付款金额"+str(money*0.7))

# 程序作者 快速的飓风.
# 于 2019.10.07
# 严禁抄袭
