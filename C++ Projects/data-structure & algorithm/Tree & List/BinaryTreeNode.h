#ifndef _BINARY_TREE_NODE_H_
#define _BINARY_TREE_NODE_H_

class BinaryTreeNode{
private:
    const char *node_name;
    
protected:
    BinaryTreeNode *left_child;
    BinaryTreeNode *right_child;

public:
    BinaryTreeNode(const char *node_name){
        this->node_name = node_name;
        this->left_child = nullptr;
        this->right_child = nullptr;
    }
    void set_left_child(BinaryTreeNode &left_child){
        this->left_child = &left_child;
    }
    void set_right_child(BinaryTreeNode &right_child){
        this->right_child = &right_child;
    }
    void traverse() const{
        std::cout << this->node_name << " ";
        if(this->left_child != nullptr){
            this->left_child->traverse();
        }
        if(this->right_child != nullptr){
            this->right_child->traverse();
        }
    }
};

#endif
