##str1="人生苦短，我用Python!"
##substr1=str1[1]
##substr2=str1[5:]
##substr3=str1[:5]
##substr4=str1[2:5]
##print('原字符串：',str1)
##print(substr1+'\n'+substr2+'\n'+substr3+'\n'+substr4+'\n')

str1="人生苦短，我用Python!"
try:
    substr5=str1[15]
except IndexError:
    print("指定的索引不存在！")
