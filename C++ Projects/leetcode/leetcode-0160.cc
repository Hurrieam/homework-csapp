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
    ListNode() : val(0), next(NULL) {}
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB)
    {
        // 筛选出遍历两个链表中遍历次数==2的节点即可
        // 根据指针的性质 直接返回头指针即可 无需建立新链表

        // 存储节点的遍历次数 节点的指针是辨别是否为同一节点的唯一依据
        unordered_map<ListNode *, int> node_freq;

        // 遍历A链表
        ListNode *headA_copy = headA;
        while (headA != nullptr)
        {
            node_freq[headA] = 0;
            headA = headA->next;
        }
        headA = headA_copy;
        while (headA != nullptr)
        {
            node_freq[headA]++;
            headA = headA->next;
        }

        // 遍历B链表
        ListNode *headB_copy = headB;
        while (headB != nullptr)
        {
            if (node_freq[headB] != 1)
            {
                node_freq[headB] = 0;
            }
            headB = headB->next;
        }
        headB = headB_copy;
        while (headB != nullptr)
        {
            node_freq[headB]++;
            headB = headB->next;
        }
        headB = headB_copy;
        while (headB != nullptr)
        {
            if (node_freq[headB] == 2)
            {
                return headB;
            }
            headB = headB->next;
        }

        return nullptr;
    }
};

int main()
{
    ListNode a1, a2, b1, b2, b3, c1, c2, c3;
    a1.next = &a2;
    a2.next = &c1;
    c1.next = &c2;
    c2.next = &c3;

    b1.next = &b2;
    b2.next = &b3;
    b3.next = &c1;

    Solution s;

    cout << s.getIntersectionNode(&a1, &b1) << endl;

    return 0;
}