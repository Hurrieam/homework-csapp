username1='|Liming|lixiaoming|liming100|LM99|'
username2=username1.lower()
regname1=input('输入要注册的会员名称：')
regname2='|'+regname1.lower()+'|'
if regname2 in username2:
    print('会员名',regname1,'已经存在！')
else:
    print('会员名',regname1,'可以注册！')
