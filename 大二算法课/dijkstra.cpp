#include <iostream>

using namespace std;

// Dijkstra图的单源到各点最短距离

int **map; // 地图

int *status; // 状态标记数组

int *dis; // 最短距离数组

int inf = 99999;

void dijkstra()
{
    // 初始化地图
    map = new int *[7];
    map[0] = new int[7];
    map[1] = new int[7];
    map[2] = new int[7];
    map[3] = new int[7];
    map[4] = new int[7];
    map[5] = new int[7];
    map[6] = new int[7];
    for (int i = 0; i < 7; i++)
    {
        for (int j = 0; j < 7; j++)
        {
            map[i][j] = 0;
        }
    }
    // p155
    map[1][4] = map[1][5] = map[1][6] =
        map[2][1] = map[2][5] = map[2][6] =
            map[3][1] = map[3][2] = map[3][4] = map[3][6] =
                map[4][1] = map[4][2] =
                    map[5][1] = map[5][2] = map[5][3] = map[5][4] =
                        map[6][1] = map[6][2] = map[6][3] = map[6][4] = map[6][5] = inf;

    map[1][2] = 1;
    map[1][3] = 12;
    map[2][3] = 9;
    map[2][4] = 3;
    map[3][5] = 5;
    map[4][3] = 4;
    map[4][5] = 13;
    map[4][6] = 15;
    map[5][6] = 4;

    // 初始化状态数组
    status = new int[7];
    for (int i = 0; i < 7; i++)
    {
        status[i] = 0;
    }
    status[1] = 1;
    // 初始化dis数组
    dis = new int[7];
    dis[0] = -1;
    for (int i = 1; i < 7; i++)
    {
        dis[i] = map[1][i];
    }
    int num = 1; // 循环5次
_BEGIN_:
    // 在dis数组中寻找未确定最短的距离的点
    int min = inf;  // 最短距离
    int index = -1; // 最短距离坐标
    // 遍历所有此点的所有出边 松弛
    for (int i = 1; i < 7; i++)
    {
        if (status[i] == 0 && dis[i] < min)
        {
            min = dis[i];
            index = i;
        }
    }
    status[index] = 1;
    for (int i = 1; i < 7; i++)
    {
        if (map[index][i] != inf && map[index][i] != 0)
        {
            if (dis[i] > map[index][i] + dis[index])
            {
                dis[i] = map[index][i] + dis[index];
            }
        }
    }
    // 直到所有的点都被确定
    num++;
    if (num == 6)
    {
        goto _RETURN_;
    }
    else
    {
        goto _BEGIN_;
    }

_RETURN_:
    return;
}

void map_prompt(int **map, int rol, int col)
{
    for (int i = 0; i < rol; i++)
    {
        for (int j = 0; j < col; j++)
        {
            ::printf("%d,", map[i][j]);
        }
        ::printf("\n");
    }
}

void dis_prompt(int *dis, int len)
{
    for (int i = 1; i < len; i++)
    {
        ::printf("%d,", dis[i]);
    }
    ::printf("\n");
}

int main()
{
    dijkstra();
    map_prompt(map, 7, 7);
    ::printf("\n");
    dis_prompt(dis, 7);
    return 0;
}