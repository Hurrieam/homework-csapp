#include <iostream>

using namespace std;

char map[13][13] = {{'#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'},
                    {'#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', 'G', 'G', '.', '#'},
                    {'#', '#', '#', '.', '#', 'G', '#', 'G', '#', 'G', '#', 'G', '#'},
                    {'#', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', 'G', '#'},
                    {'#', 'G', '#', '.', '#', '#', '#', '.', '#', 'G', '#', 'G', '#'},
                    {'#', 'G', 'G', '.', 'G', 'G', 'G', '.', '#', '.', 'G', 'G', '#'},
                    {'#', 'G', '#', '.', '#', 'G', '#', '.', '#', '.', '#', '#', '#'},
                    {'#', '#', 'G', '.', '.', '.', 'G', '.', '.', '.', '.', '.', '#'},
                    {'#', 'G', '#', '.', '#', 'G', '#', '#', '#', '.', '#', 'G', '#'},
                    {'#', '.', '.', '.', 'G', '#', 'G', 'G', 'G', '.', 'G', 'G', '#'},
                    {'#', 'G', '#', '.', '#', 'G', '#', 'G', '#', '.', '#', 'G', '#'},
                    {'#', 'G', 'G', '.', 'G', 'G', 'G', '#', 'G', '.', 'G', 'G', '#'},
                    {'#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'}};

// 小人起始位置坐标
int begin_X = 3; // 横
int begin_Y = 3; // 纵

// 状态标记数组
int status[13][13];

// 有关结点的定义
struct node
{
    int x; // 横坐标
    int y; // 纵坐标
};

int next[4][2] = {
    {0, 1},  // 右
    {1, 0},  //下
    {0, -1}, // 左
    {-1, 0}  //上
};

// 有关队列的定义
struct queue
{
    node que[170];
    int head, tail, max, mx, my, tx, ty, n, m, sum;

    // 队列初始化
    queue()
    {
        this->head = this->tail = 1;
        this->max = 0;
        this->n = this->m = 13;
        // 插入小人起始坐标
        this->que[tail].x = begin_X;
        this->que[tail].y = begin_Y;
        tail++;
        status[begin_X][begin_Y] = 1;
        this->max = get_num(begin_X, begin_Y);
        mx = begin_X;
        my = begin_Y;

        // 队列非空时
        while (head < tail)
        {
            // 四个方向
            for (int k = 0; k < 4; k++)
            {
                tx = que[head].x + ::next[k][0];
                ty = que[head].y + ::next[k][1];

                // 是否越界
                if (tx < 0 || tx > n - 1 || ty < 0 || ty > m - 1)
                {
                    continue;
                }

                // 是否为平地/是否曾经走过
                if (map[tx][ty] == '.' && status[tx][ty] == 0)
                {
                    // 每个节点只入队一次 需标记该店已经走过
                    status[tx][ty] = 1;
                    // 队列中插入新扩展的点
                    que[tail].x = tx;
                    que[tail].y = ty;
                    tail++;

                    // 统计当前新扩展的点可以消灭的敌人总数
                    sum = get_num(tx, ty);

                    // 更新max的值
                    if (sum > max)
                    {
                        // 如果当前统计出的所能消灭敌人的数量大于max 则更新max 用mx和my记录该点坐标
                        max = sum;
                        mx = tx;
                        my = ty;
                    }
                }
            }
            head++; // 对后面的点进行扩展
        }

        ::printf("(%d, %d): %d\n", mx, my, max);
    }

    int get_num(int i, int j);
};

int queue::get_num(int i, int j)
{
    int sum = 0; // 计数变量

    int x = i, y = j; // 复制变量 以便以后向四个方向统计
    // 是不是墙
    while (map[x][y] != '#')
    {
        // 是敌人
        if (map[x][y] == 'G')
        {
            sum++; // 计数器+1
        }
        x--; //继续向上统计
    }

    // 向下统计
    x = i;
    y = j;
    while (map[x][y] != '#')
    {
        if (map[x][y] == 'G')
        {
            sum++;
        }
        x++;
    }

    // 向左统计
    x = i;
    y = j;
    while (map[x][y] != '#')
    {
        if (map[x][y] == 'G')
        {
            sum++;
        }
        y--;
    }

    // 向右统计
    x = i;
    y = j;
    while (map[x][y] != '#')
    {
        if (map[x][y] == 'G')
        {
            sum++;
        }
        y++;
    }

    return sum;
}

int main()
{
    queue qu;
    return 0;
}