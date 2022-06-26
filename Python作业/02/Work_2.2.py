father = float(input("请输入父亲身高（米）\n>>"))
mother = float(input("请输入母亲身高（米）\n>>"))

son = ((father+mother)*1.08)/2
daughter = (father*0.923+mother)/2

gender = str(input("请输入孩子的性别（男/女）\n>>"))
if gender == "男":
    print("预测您儿子成年后的身高为"+str(son)+"米")
if gender == "女":
    print("预测您女儿成年后的身高为"+str(daughter)+"米")

# 程序作者 快速的飓风.
# 于 2019.10.07
# 严禁抄袭
