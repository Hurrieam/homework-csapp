// 软件191 胡瑞平 19031198 20210922算法课作业 快速排序

#include <iostream>
#include <vector>

using namespace std;

void prompt(vector<int> vec);

void quick_sort(vector<int> &vec, int left, int right)
{
    int i, j, t, temp;
    if (left > right)
    {
        return;
    }

    temp = vec[left]; // 基准数
    i = left;
    j = right;
    while (i != j)
    {
        // 从右往左找
        while (vec[j] >= temp && i < j)
        {
            j--;
        }
        // 从左往右找
        while (vec[i] <= temp && i < j)
        {
            i++;
        }
        // 两个哨兵没有相遇时 交换两个数在数组中的位置
        if (i < j)
        {
            t = vec[i];
            vec[i] = vec[j];
            vec[j] = t;
        }
    }

    // 基准数归位
    vec[left] = vec[i];
    vec[i] = temp;

    prompt(vec);

    // 处理左边的
    quick_sort(vec, left, i - 1);

    // 处理右边的
    quick_sort(vec, i + 1, right);

    return;
}

void prompt(vector<int> vec)
{
    for (vector<int>::iterator i = vec.begin(); i != vec.end(); i++)
    {
        cout << *i << " ";
    }
    cout << endl;
}

void add(vector<int> &v, int *arr, int len)
{
    for (int i = 0; i < len; i++)
    {
        v.push_back(*(arr + i));
    }
}

void quick_sort(vector<int> &v)
{
    quick_sort(v, 0, v.size() - 1);
}

int main()
{
    int arr_1[] = {6, 4, 8, 5, 7, 2, 1, 9, 3, 0};
    vector<int> v_1;
    add(v_1, arr_1, 10);
    prompt(v_1);
    quick_sort(v_1);
    prompt(v_1);

    cout << endl;

    int arr_2[] = {12, 33, 8, 1, 9, 27, 16, 21, 5, 24};
    vector<int> v_2;
    add(v_2, arr_2, 10);
    prompt(v_2);
    quick_sort(v_2);
    prompt(v_2);

    return 0;
}