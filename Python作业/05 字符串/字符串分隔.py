str1 = '西 安 交 通 大 学 城 市 学 院 官 网    >>>   www.xjtucc.cn'
print('原字符串：',str1)
list1 = str1.split()            #采用默认分隔符进行分隔
list2 = str1.split('>>>')    #采用多个字符进行分隔
list3 = str1.split('.')         #采用.号进行分隔
list4 = str1.split(' ',4)      #采用空格进行分隔，并且只分隔前4个
print(str(list1)+'\n'+str(list2)+'\n'+str(list3)+'\n'+str(list4))
list5 = str1.split('>')       #采用>号进行分隔
print(list5)
