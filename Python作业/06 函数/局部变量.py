message = '失败乃成功之母'                     #全局变量
print('函数体外message=',message) 
def f_demo():
    global message
    message = 'one apple a day, keeps the doctor away!'  #局部变量
    print('函数体内message=',message)   #在函数体内输出局部变量的值
f_demo()                                                  #调用函数
print('函数体外message=',message)       #在函数体外输出全局变量的值
