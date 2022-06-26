DB = {}

prop = ("""
--------按1查询项目--------
--------按2新建或修改项目--
--------按3删除项目--------
--------按4退出程序--------
""")

def search():
    name = input("在这里输入想要查询的项目名称：")
    if name in DB:
        print(name + ':' + DB[name])
    else:
        print("您查询的项目不存在！")

def reset():
    name = input("在这里输入想要新建的项目名称：")
    if name in DB:
        print("您所要的项目已经存在-->>",end='')
        print(name + ':' + DB[name])
        if input('是否修改此项目（Y或N）：') == 'Y':
            DB[name] = input("输入的信息：")
    else:
        DB[name] = input("输入的信息：")

def delete():
    name = input("在这里输入想要删除的项目名称：")
    if name in DB :
        del(DB[name])
        print("删除成功")
    else:
        print("删除项目不存在")

while True:
    print(prop)
    choice = (input("您想要执行的操作是："))
    if choice.isdigit:
        choice = int(choice)
        if choice == 1:
            search()
        elif choice == 2:
            reset()
        elif choice == 3:
            delete()
        elif choice == 4:
            break
        else:
            print("您的输入有误\n请重新输入：")
    else:
        print("输入错误，请重新输入")

print("--------感谢使用本系统--------")