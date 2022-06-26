def menu():
    print("用Python解读CSV文件demo")
    name = str(input("将csv文件复制进FILE_SAVING_PLACE内并键入文件名（不用输入“.csv”）\n>>"))
    try:
        file = open("FILE_SAVING_PLACE/" + name + ".csv")
    except:
        print("文件打开失败！")
        return
    content = file.read().replace(",","\t")
    print(content)
    file.close()
