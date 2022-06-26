film_list = ['一路向西']


def fun_film_list_printmenu():
    print("""
		*******欢迎使用热播电影APP*******	
	                  查看排行榜请输入		0
		 添加排行榜请输入		1
		查询排行榜请输入		2
		删除排行榜请输入		3
		查询菜单输入	                4
		退出请输入                                5
                               *********************************
			""")


def fun_film_list_check():
    '''功能：电影列表的查看'''
    print('\n\t\t*******爱奇艺热播电影排行榜*******')
    for i in range(len(film_list)):
        print('\t\t\t', '第', i + 1, '名', '\t\t', film_list[i])
    print('\t\t********************************')


def fun_film_list_addition():
    '''功能：电影列表的添加'''
    num = len(film_list)
    update1 = str(input('\n请输入要添加的电影名称：'))
    print('\n请输入要添加到排行榜中的位次【 1 -', num + 1, '】:', end=" ")
    sequence = int(input())
    if 1 <= sequence <= num + 1:
        film_list.insert(sequence - 1, update1)
        print('\n\t\t*******爱奇艺热播电影排行榜*******')
        for i in range(len(film_list)):
            print('\t\t\t', '第', i + 1, '名', '\t\t', film_list[i])
        print('\t\t********************************')
    else:
        print('\n您所输入的位次有误')


def fun_film_list_inquire():
    '''功能：电影列表的查询'''
    update2 = str(input('\n请输入要查询的电影名称：'))
    Z = update2 in film_list
    if Z == True:
        cunzai = film_list.index(update2)
        print('\n您所查询的电影排名为', '第', cunzai + 1, '名')
    else:
        print('\n您所查找的电影不存在')


def fun_film_list_delete():
    '''功能：电影列表的删除'''
    num = len(film_list)
    print('\n请输入要删除的电影排名【 1 -', num, '】：', end=" ")
    update3 = int(input())
    del film_list[update3 - 1]
    print('\n\t\t*******爱奇艺热播电影排行榜*******')
    for i in range(len(film_list)):
        print('\t\t\t', '第', i + 1, '名', '\t\t', film_list[i])
    print('\t\t********************************')


def fun_film_list_menu():
    '''功能：菜单的查询'''


def fun_film_list_list():
    '''功能：更改全局变量film_list()'''
    global film_list
    film_list = film_list


def fun_film_list_menu():
    while True:
        X = input('\n\n请输入您所需要执行的功能,查询菜单输入4,退出请输入5：')
        if X == '0':
            fun_film_list_check()
        elif X == '1':
            fun_film_list_addition()
        elif X == '2':
            fun_film_list_inquire()
        elif X == '3':
            fun_film_list_delete()
        elif X == '4':
            fun_film_list_printmenu()
        elif X == '5':
            fun_film_list_list()
            break
        else:
            print('\n您所使用的功能不存在')
            continue

fun_film_list_printmenu()
fun_film_list_menu()
print('欢迎下次使用')
