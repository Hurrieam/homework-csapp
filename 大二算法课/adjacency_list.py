n = 6  # 6个顶点
m = 9  # 9条边

u = [0, 1, 1, 2, 2, 3, 4, 4, 4, 5]  # 起点
v = [0, 2, 3, 3, 4, 5, 3, 5, 6, 6]  # 终点
w = [0, 1, 12, 9, 3, 5, 4, 13, 15, 4]  # 权值

first = [0, 0, 0, 0, 0, 0, 0]
next = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


def main():
    for i in range(1, n+1, 1):
        first[i] = -1

    for i in range(1, m+1, 1):
        next[i] = first[u[i]]
        first[u[i]] = i

    for i in range(1, 7, 1):
        k = first[i]
        while k != -1:
            print("(%d,%d):%d" % (u[k], v[k], w[k]))
            k = next[k]


if __name__ == '__main__':
    main()
