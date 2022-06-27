#include <iostream>

using namespace std;

// 地图
int map[5][4] = {{0, 0, 1, 0}, {0, 0, 0, 0}, {0, 0, 1, 0}, {0, 1, 0, 0}, {0, 0, 0, 1}};

// 每个节点的状态 0代表未走过 在路径中 1代表已走过 不在路径中
int status[5][4];

// 起点和终点坐标
int begin_X = 0, begin_Y = 0, end_X = 2, end_Y = 3;

// 地图的行数和列数
int row = 5, col = 4;

// 最短步数（最终结果）
int min = INT_MAX;

void dfs(int x, int y, int step)
{
    int next[4][2] = {
        {0, 1},  //右
        {1, 0},  //下
        {0, -1}, //左
        {-1, 0}, //上
    };

    if (x == end_X && y == end_Y)
    {
        if (step < (::min))
        {
            ::min = step; // 更新最小值
        }
        return;
    }

    // 枚举四种走法
    for (int k = 0; k < 4; k++)
    {
        // 下一个点的坐标
        int next_X = x + next[k][0];
        int next_Y = y + next[k][1];
        // 判断是否越界
        if (next_X < 0 || next_X > col || next_Y < 0 || next_Y > row)
        {
            continue;
        }
        // 该点是否在障碍物或路径中
        if (map[next_X][next_Y] == 0 && status[next_X][next_Y] == 0)
        {
            status[next_X][next_Y] = 1;    // 标记已经走过
            dfs(next_X, next_Y, step + 1); // 尝试下一个点
            status[next_X][next_Y] = 0;    //取消这个点的标记
        }
    }
}

int main()
{
    status[begin_X][begin_Y] = 1; // 起点已在路径中 防止重复走
    dfs(begin_X, begin_Y, 0);
    cout << ::min << endl;
    return 0;
}