#include <iostream>

using namespace std;

int main()
{
    int scores[] = {105, 103, 105, 102, 108};

    int *buckets = new int[10];
    for (int i = 0; i < 10; i++)
    {
        buckets[i] = 0;
    }

    // 要排序的第几个数
    for (int i = 0; i < 5; i++)
    {
        buckets[scores[i] - 100]++;
    }

    // 第几个桶
    for (int i = 0; i < 10; i++)
    {
        // 这个桶里循环多少次
        for (int j = 0; j < buckets[i]; j++)
        {
            cout << i + 100 << " ";
        }
    }

    delete[] buckets;

    return 0;
}