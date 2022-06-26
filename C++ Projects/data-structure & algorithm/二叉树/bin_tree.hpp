#pragma once

class node
{
private:
    int val;
    node *left;
    node *right;
    static void traverse_truth(node *);

public:
    node(int);
    node();
    void link_left(node &);
    void link_right(node &);

    // 前序遍历
    static void traverse(node *);
};

node::node(int val)
{
    this->val = val;
    this->left = nullptr;
    this->right = nullptr;
}

node::node()
{
    this->val = 0;
    this->left = nullptr;
    this->right = nullptr;
}

void node::link_left(node &other)
{
    this->left = &other;
}

void node::link_right(node &other)
{
    this->right = &other;
}

void node::traverse(node *beginner)
{
    node::traverse_truth(beginner);
    std::cout << std::endl;
}

void node::traverse_truth(node *beginner)
{
    if (beginner != nullptr)
    {
        std::cout << beginner->val << " ";
        traverse_truth(beginner->left);
        traverse_truth(beginner->right);
    }
}