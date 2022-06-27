#include <iostream>

using namespace std;

// 1 4 5 7 8 9 放入四个箱子中的全排列

int box[5];                          // 四个箱子
int status[10];                      // 六张牌的状态 0在手上 1在箱子里
int n = 6;                           // 本题中顺序尝试1~6
int card[] = {-1, 1, 4, 5, 7, 8, 9}; // 六张牌

void dfs(int step)
{
    // 本问题的边界是step==5
    if (step == 5)
    {
        for (int i = 1; i <= 4; i++)
        {
            ::printf("%d, ", box[i]);
        }
        cout << endl;
        return;
    }

    // 顺序尝试1~6
    for (int i = 1; i <= n; i++)
    {
        // 如果在手上
        if (status[card[i]] == 0)
        {
            // 放入箱中
            box[step] = card[i];
            // 标记该牌在箱中
            status[card[i]] = 1;
            // 执行下一步
            dfs(step + 1);
            // 完成后将牌拿到手上
            status[card[i]] = 0;
        }
    }
}

int main()
{
    // 站在1号箱子前
    dfs(1);

    return 0;
}