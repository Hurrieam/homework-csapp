import math
PI = math.pi
def fun_area(r):
    '''功能：计算圆形面积
       参数：r(半径）
    '''
    return round(PI * r * r,2)
if __name__ == '__main__':
    print(fun_area(10))
