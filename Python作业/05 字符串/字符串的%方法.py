temp = '编号: {:0>9s} \t 学校名称：{:s} \t 官网：  http://www. {:s}.cn'  #定义模板
context1 = temp.format('7','西安交通大学','xjtu')          #转换内容1
context2 = temp.format('8','西安交通大学城市学院','xjtucc')   #转换内容2
print(context1) 
print(context2)
 
