#include <iostream>

using namespace std;

int w = 4;                // 背包容量为w
int *ws = new int[5];     // 物品重量w
int *vs = new int[5];     // 价值v
int **tbl = new int *[5]; // 表格
int n = 3;                // 物品数量

// 初始化
void init()
{
    ::ws[0] = 0;
    ::ws[1] = 1;
    ::ws[2] = 4;
    ::ws[3] = 3;
    ::ws[4] = 1;

    vs[0] = 0;
    vs[1] = 1500;
    vs[2] = 3000;
    vs[3] = 2000;
    vs[4] = 2000;

    for (int i = 0; i < 5; i++)
    {
        tbl[i] = new int[5];
        for (int j = 0; j < 5; j++)
        {
            tbl[i][j] = 0;
        }
    }
}

void backpack()
{
    for (int i = 1; i < 5; i++)
    {
        for (int j = 1; j < 5; j++)
        {
            // 上一单元格的值。是不包含当前物品的情况下j容量袋子的最优解
            int a = tbl[i - 1][j];
            // 将当前物品的价值+背包中空余空间的最优解==将当前物品放入背包后的最大价值
            // 背包中空余空间的最优解==不包含当前物品[i-1]的容量为 剩余空间==j-ws[i] 包的最优解
            int b = 0;
            if (j - ::ws[i] >= 0)
            {
                b = vs[i] + tbl[i - 1][j - ::ws[i]];
            }
            tbl[i][j] = a > b ? a : b;
        }
    }
}

void result_prompt()
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            cout << tbl[i][j] << ',';
        }
        cout << endl;
    }
}

int main()
{
    init();

    backpack();

    result_prompt();

    delete[] ::ws, vs;

    for (int i = 0; i < 5; i++)
    {
        delete[] tbl[i];
    }
    delete[] tbl;
    return 0;
}