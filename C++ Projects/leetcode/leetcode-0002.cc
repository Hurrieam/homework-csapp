#include <iostream>
#include <vector>
#include <cmath>

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
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        using ull = unsigned long long; // 防溢出机制
        ull l1_num = 0, l2_num = 0, sum_num = 0;
        vector<int> l1_vec, l2_vec, sum_vec;

        // 分别遍历两个链表 形成两个向量
        while (l1 != nullptr)
        {
            l1_vec.push_back(l1->val);
            l1 = l1->next;
        }
        while (l2 != nullptr)
        {
            l2_vec.push_back(l2->val);
            l2 = l2->next;
        }

        // 从两个向量构建出两个数字 相加求和
        ull l1_pow = pow(10, l1_vec.size() - 1);
        for (int i = l1_vec.size() - 1; i >= 0; i--)
        {
            l1_num += static_cast<ull>(l1_vec[i]) * static_cast<ull>(l1_pow); // int转ull
            l1_pow /= 10;
        }
        ull l2_pow = pow(10, l2_vec.size() - 1);
        for (int i = l2_vec.size() - 1; i >= 0; i--)
        {
            l2_num += static_cast<ull>(l2_vec[i]) * static_cast<ull>(l2_pow); // int转ull
            l2_pow /= 10;
        }
        sum_num = l1_num + l2_num;

        // 特殊情况
        if (sum_num == 0)
        {
            ListNode *sum_head = new ListNode(0);
            return sum_head;
        }

        // 构建向量 形成链表
        while (sum_num > 0)
        {
            sum_vec.push_back(sum_num % 10);
            sum_num /= 10;
        }

        ListNode *sum_head, **node_ptr = &sum_head;
        for (auto sum_vec_elem : sum_vec)
        {
            *node_ptr = new ListNode(sum_vec_elem);
            node_ptr = &((*node_ptr)->next);
        }

        return sum_head;
    }
};

int main()
{
    ListNode a(1), b(1), c(1), d(1), e(1), f(1), g(1), h(1), i(1), j(1), k(1);
    ListNode l(1), m(1), n(1), o(1), p(1), q(1), r(1), s(1), t(1), u(1), v(1);

    a.next = &b;
    b.next = &c;
    c.next = &d;
    d.next = &e;
    e.next = &f;
    f.next = &g;
    g.next = &h;
    h.next = &i;
    i.next = &j;
    j.next = &k;

    l.next = &m;
    m.next = &n;
    n.next = &o;
    o.next = &p;
    p.next = &q;
    q.next = &r;
    r.next = &s;
    s.next = &t;
    t.next = &u;
    u.next = &v;

    Solution so;
    cout << so.addTwoNumbers(&a, &l) << endl;

    return 0;
}