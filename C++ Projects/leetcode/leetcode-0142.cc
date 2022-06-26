#include <iostream>
#include <unordered_map>

using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
private:
    ListNode *result_node;

    // leetcode-0141
    bool hasCycle(ListNode *head)
    {
        if (head == nullptr)
        {
            return false;
        }
        unordered_map<ListNode *, bool> my_map;
        // 以节点的指针为判断是否为同一节点的唯一依据
        // false未遍历过 true遍历过
        // map用于标记当前节点是否遍历过
        // 若遍历到了之前遍历过的节点则有环
        while (head->next != nullptr)
        {
            if (my_map[head] == true)
            {
                result_node = head; // 找到节点后保存该节点 待主调函数返回

                return true;
            }
            my_map[head] = true;
            head = head->next;
        }
        return false;
    }

public:
    ListNode *detectCycle(ListNode *head)
    {
        if (!hasCycle(head))
            return nullptr;
        return result_node;
    }
};

int main()
{
    ListNode a(3);
    ListNode b(2);
    ListNode c(0);
    ListNode d(4);

    a.next = &b;
    b.next = &c;
    c.next = &d;
    d.next = &b;

    Solution s;

    cout << s.detectCycle(&a) << endl;

    return 0;
}