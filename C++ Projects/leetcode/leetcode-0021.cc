#include <iostream>
#include <vector>

using namespace std;

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        vector<int> list;

        // 遍历链表1
        while (list1 != nullptr)
        {
            list.push_back(list1->val);
            list1 = list1->next;
        }

        // 遍历链表2
        while (list2 != nullptr)
        {
            list.push_back(list2->val);
            list2 = list2->next;
        }

        // 排序
        sort(list.begin(), list.end());

        // 生成新链表
        ListNode *head, **node_ptr = &head;
        for (auto elem : list)
        {
            *node_ptr = new ListNode(elem);
            node_ptr = &((*node_ptr)->next);
        }

        return head;
    }
};

int main()
{
    Solution s;
    ListNode a(1);
    ListNode b(2);
    ListNode c(4);
    ListNode d(1);
    ListNode e(3);
    ListNode f(4);
    a.next = &b;
    b.next = &c;

    d.next = &e;
    e.next = &f;
    ListNode *head = s.mergeTwoLists(&a, &d);

    // 遍历最终链表
    while (head != nullptr)
    {
        cout << head->val << endl;
        head = head->next;
    }

    return 0;
}