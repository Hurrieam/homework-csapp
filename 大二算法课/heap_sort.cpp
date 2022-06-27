#include <iostream>
#include <vector>

using namespace std;

// 待排序数组
int tree[11] = {-1, 3, 8, 1, 5, 2, 6, 7, 9, 10, 4};

// 待排序总数
int n = 10;

// 小顶堆向下调整 i为下标
void shift_down(int i)
{

    // 较大结点的编号
    int temp = i;

    // 是否还需要继续调整
    bool flag = true;

    while (i * 2 <= n && flag == true)
    {
        // 判断和左孩子的关系
        // 左孩子值更大？
        if (tree[i] < tree[i * 2])
        {
            temp = i * 2;
        }

        //有右孩子
        if (i * 2 + 1 <= n)
        {
            // 右孩子值更大？
            if (tree[temp] < tree[2 * i + 1])
            {
                temp = 2 * i + 1;
            }
        }

        // 完成后temp指向左右孩子中最小的节点
        if (temp == i)
        {
            // 最小节点就是自己 不用调整了
            flag = false;
            return;
        }
        else
        {
            // 交换
            swap(tree[temp], tree[i]);
            // 继续调整
            i = temp; // i指向下标temp 循环上一步操作
        }
    }
}

void min_heap_init()
{
    // 最后一个有叶子结点的父节点
    int father = n / 2;

    for (; father >= 1; father--)
    {
        // 向下堆调整
        shift_down(father);
    }
}

vector<int> result;
void heap_sort()
{
    // 创建大顶堆
    min_heap_init();
    while (n > 0)
    {
        // 得到最小元素	将树中最后元素放到树顶
        result.push_back(tree[1]);
        // 将树中最后元素放到树顶
        tree[1] = tree[n];
        // 重新设置树的大小 树变小了
        n--;
        // 进行堆调整 从根节点开始
        shift_down(1);
        // 重复 直到树上没有桃子
    }

    // 打印新数组
    for (int i = 0; i < result.size(); i++)
    {
        ::printf("%d,", result[i]);
    }
}

int main()
{
    heap_sort();
    return 0;
}