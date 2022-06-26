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
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        // 遍历链表
        vector<ListNode *> list_traverse_vec;
        while (head != nullptr)
        {
            list_traverse_vec.push_back(head);
            head = head->next;
        }

        if (list_traverse_vec.size() == 1)
        {
            return nullptr;
        }

        // 返回倒数第n个节点
        ListNode *NthFromEnd_node = list_traverse_vec[list_traverse_vec.size() - n];

        head = list_traverse_vec[0];
        while (head->next != NthFromEnd_node && head != NthFromEnd_node)
        {
            head = head->next;
        }

        if (head == NthFromEnd_node)
        {
            return list_traverse_vec[0]->next;
        }
        head->next = head->next->next;
        return list_traverse_vec[0];
    }
};

int main()
{
    ListNode a(1), b(2);
    a.next = &b;

    Solution s;
    cout << s.removeNthFromEnd(&a, 2) << endl;

    return 0;
}