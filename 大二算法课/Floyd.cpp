#include <iostream>

using namespace std;

int inf = 99999;

int map[5][5] = {
    {0, 0, 0, 0, 0},
    {0, 0, 2, 6, 4},
    {0, inf, 0, 3, inf},
    {0, 7, 9, 0, 1},
    {0, 5, 7, 11, 0},
};

int n = 4;

void floy()
{

    // 遍历第k个结点
    for (int k = 1; k <= n; k++)
    {

        for (int i = 1; i <= n; i++)
        {
            for (int j = 1; j <= n; j++)
            {
                if (map[i][j] > map[i][k] + map[k][j])
                {
                    map[i][j] = map[i][k] + map[k][j];
                }
            }
        }
    }
}

void print_map(int map[5][5], int len_row, int len_col)
{
    for (int i = 1; i <= len_row; i++)
    {
        for (int j = 1; j <= len_col; j++)
        {
            ::printf("%d,", map[i][j]);
        }
        cout << endl;
    }
}

int main()
{
    floy();

    print_map(map, n, n);

    return 0;
}