#ifndef _BINARY_SORTED_TREE_H_
#define _BINARY_SORTED_TREE_H_

#include"BinaryTreeNode.h"

class BinarySortedTree : public BinaryTreeNode{
private:
    int value;
public:
    BinarySortedTree(int value){
        this->value = value;
    }
    
    void insert(int value){
        while (this->left_child != nullptr || this->right_child != nullptr) {
            if()
        }
    }
};

#endif
