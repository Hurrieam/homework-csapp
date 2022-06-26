# -*- coding: utf-8 -*-
# decimal意思为十进制，这个模块提供了十进制浮点运算支持。
from decimal import Decimal
# 提供了随机方法
import random
print('——————————模拟微信抢红包——————————')
total = input('请输入要装入红包的总金额（元）：')
num = input('请输入红包的个数（个）：')
min = 0.01  # 每个人最少能收到 0.01 元
# 创建红包列表
money_list = []
# 转换红包金额为十进制 方便后期计算
total = Decimal(total)
# 转换红包个数为十进制 方便后期计算
num = Decimal(num)
# 转换最小红包数为十进制 方便后期计算
min = Decimal(str(min))
# 判断红包金额是否 大于每个 红包个数*每个人最少获得的0.01
if total > num * min:
    # 根据红包个数进行循环 重1开始 所以随机出来的会少1个红包
    for i in range(1, int(num)):
        # 根据循环到的红包个数 判断随机安全上限 不至于红包m没有没人最少0.01
        safe_total = (total - (num - i) * min)
        # 随机出 获取红包金额
        temp_min = min *100   # 随机的最小值
        temp_max = int(safe_total * 100)  # 随机的最大值
        money = temp_min/100 if temp_min > temp_max else (Decimal(random.randint(temp_min, temp_max)))/100
        # 重置总金额 减去随机出的金额
        total -= money
        # 添加随机出的金额到 红包列表
        money_list.append(money)
    #保存最后一个元素到红包数组 不足红包数量
    money_list.append(total)
    # 随机打乱列表顺序
    random.shuffle(money_list)
    for x in range(len(money_list)):   # 输出结果
        print('第'+str(x+1)+'个红包：'+str(money_list[x])+'元')
