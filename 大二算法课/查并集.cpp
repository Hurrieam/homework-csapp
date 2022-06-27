#include <iostream>

using namespace std;

int *f, n, *v, *u;

int f_len, v_len, u_len;

// 初始化
void init(int new_n, int nmbr)
{
    n = new_n;
    f = new int[n + 1];
    f_len = n + 1; // 0不使用
    for (int i = 1; i <= n; i++)
    {
        f[i] = i; // 各自为政 自己是自己的老大
    }

    // 初始化线索
    u = new int[nmbr];
    u_len = nmbr;
    v = new int[nmbr];
    v_len = nmbr;
    v[0] = 1;
    u[0] = 2;
    v[1] = 3;
    u[1] = 4;
    v[2] = 5;
    u[2] = 2;
    v[3] = 4;
    u[3] = 6;
    v[4] = 2;
    u[4] = 6;
    v[5] = 8;
    u[5] = 7;
    v[6] = 9;
    u[6] = 7;
    v[7] = 1;
    u[7] = 6;
    v[8] = 2;
    u[8] = 4;
}

int get_boss(int);

// 根据线索合并成员 v和u是同一个团伙
void merge(int v, int u)
{
    // 找各自的老大
    int boss1 = get_boss(v);
    int boss2 = get_boss(u);
    // 比较各自老大是否是同一个人
    if (boss1 != boss2)
    {
        // 如果不是 后来者居上 擒贼先擒王
        // 靠左原则：u的老大是v，u之前的老大听v的话，v成为新老大
        // 3种依附关系 选择第三种
        f[boss2] = v;
        // 第二种：u的老大听v的老大的话
        // 第一种：u的老大和u都听v的老大的话
    }
    // 是则什么都不做
}

int get_boss(int node)
{
    // 找到了
    if (f[node] = node)
        return node;

    // 没找到
    return get_boss(f[node]);
}

int main()
{
    init(10, 9);
    for (int i = 0; i < v_len; i++)
    {
        merge(v[i], u[i]);
    }

    int boss_sum = 0;
    for (int i = 1; i <= n; i++)
    {
        if (f[i] == i)
        {
            boss_sum++;
            ::printf("%d是老大\n", i);
        }
    }
    ::printf("犯罪团伙%d个\n", boss_sum);

    delete[] f, v, u;
    return 0;
}