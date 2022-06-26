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

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        if(head == nullptr) return head;

        vector<int> node_vec;
        while(head != nullptr){
            node_vec.push_back(head->val);
            head = head->next;
        }

        if(node_vec.size() == 1) return new ListNode(node_vec[0]);

        if(node_vec.size() % 2 == 0) {
            for (int i = 0; i < node_vec.size(); i += 2) {
                swap(node_vec[i], node_vec[i + 1]);
            }
        }else{
            for (int i = 0; i < node_vec.size()-1; i += 2) {
                swap(node_vec[i], node_vec[i + 1]);
            }
        }

        ListNode *new_head, **node_ptr = &new_head;
        for(int i = 0; i < node_vec.size(); i++){
            *node_ptr = new ListNode(node_vec[i]);
            node_ptr = &((*node_ptr)->next);
        }

        return new_head;
    }
};

int main() {
    ListNode a(1), b(2), c(3), d(4);
    a.next = &b;
    b.next = &c;
    // c.next = &d;

    ListNode *node_ptr = Solution().swapPairs(&a);

    while(node_ptr != nullptr){
        cout << node_ptr->val << ' ';
        node_ptr = node_ptr->next;
    }

    cout << endl;
    return 0;
}
