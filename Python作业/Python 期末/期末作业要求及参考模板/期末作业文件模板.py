import pickle

DB_file = open("database","rb") 
DB = pickle.load(DB_file)
DB_file.close()

def fun_printmenu():
    '''功能：输出系统主界面菜单 '''
    print("""        欢迎使用爱奇艺电影排行榜查询系统
                 --------1. 电影排行榜----------------
                 --------2. 查询电影   ----------------
                 --------3. 更新/修改电影------------
                 --------4. 删除电影-------------------
                 --------5. 退出程序--------
           """)

def fun_movielist():
    '''功能：输出电影排行榜单'''
    print('\n\t\t*******爱奇艺热播电影排行榜*******')
    for i in DB:
        print('\t\t\t'+i+'\t'+DB[i])
    print('\t\t********************************')
    
def fun_search():
    id = input("请输入您要查询的电影代码：")
    if id in DB:
        print(id + ':' + DB[id])
    else:
        print("您查询的电影不存在！")

def fun_reset():
    id = input("请输入您要添加电影的代码：")
    if id in DB:
        print("您添加的电影代码已存在-->>",end='')
        print(id + ':' + DB[id])
        if input('是否修改此电影代码（Y或N）：') == 'Y':
            newid = input("再次输入确认该电影的代码：")
            DB[newid] = DB[id]
            print(newid + ':' + DB[newid])
    else:
        DB[id] = input("输入要添加电影的名称：")

def fun_delete():
    id = input("请输入您要删除的电影代码：")
    if id in DB :
        del DB[id]
        print("删除成功")
    else:
        print("删除的电影不存在！")
                
        

def fun_mainmenu():
    while True:
        fun_printmenu()
        choice = input("您想要执行的操作是：")
        if choice.isdigit:
            choice = int(choice)
            if choice == 1:
                fun_movielist()
            elif choice == 2:
                fun_search()
            elif choice == 3:
                fun_reset()
            elif choice == 4:
                fun_delete()
            elif choice == 5:
                break
            else:
                print("您的输入有误\n请重新输入：")
        else:
            print("输入错误，请重新输入")
fun_mainmenu()
DB_file = open("database","wb")
pickle.dump(DB,DB_file)
DB_file.close()

print("--------感谢使用本系统--------")
