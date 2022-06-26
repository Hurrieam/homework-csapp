def circlearea(r):
    result = 3.1415926*r*r
    return result
a = float(input("请输入圆1半径（米）："))
c = float(input("请输入圆2半径（米）："))

a1 = circlearea(a)
c1 = circlearea(c)
if a1>c1:
    print("圆1大")
else:
    print("圆2大,圆2的面积是",c1)

