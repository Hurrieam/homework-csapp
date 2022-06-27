monkeys = [i for i in range(0, 16, 1)]  # 1~15号猴子 0号不用

numbers = [i for i in range(0, 8, 1)]  # 数字1~7 0号不用

numbers_ptr = 1  # 当前猴子报的是几号

while len(monkeys) > 2:
    for i in range(1, len(monkeys)-1, 1):
        if numbers_ptr == 7:
            del monkeys[i]
            numbers_ptr = 1
        else:
            numbers_ptr = numbers_ptr+1

del monkeys[0]

print("第%d号猴子" % monkeys[0])
