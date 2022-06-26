##import math                     #导入math模块
##def circlearea(r):               #定义一个计算圆面积的函数
##    area = math.pi*r*r       #计算圆面积
##    return area                  #返回圆面积
##r=10
##print('半径为',r,'的圆面积为：',circlearea(r))
import math                     #导入math模块
r=10
area=lambda r: math.pi*r*r   #计算圆面积的lambda表达式
print('半径为',r,'的圆面积为：',area(r))
