#ifndef _LINKED_LIST_NODE_H_
#define _LINKED_LIST_NODE_H_

class LinkedListNode{
private:
    const char *data;
    LinkedListNode *next;

public:
    LinkedListNode(const char *data){
        this->data = data;
        this->next = nullptr;
    }

    void set_next_node(LinkedListNode &next_node){
        this->next = &next_node;
    }

    void traverse(){
        LinkedListNode *ptr = this;
        while(ptr != nullptr){
            std::cout << ptr->data << " ";
            ptr = ptr->next;
        }
    }
};

#endif
