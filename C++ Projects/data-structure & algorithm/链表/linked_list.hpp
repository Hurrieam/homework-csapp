#pragma once

class node
{
private:
    int val;
    node *next;

public:
    node(int val);
    node();
    static void traverse(node *);
    void link(node *);
};

node::node(int val)
{
    this->val = val;
    this->next = nullptr;
}

node::node()
{
    this->val = 0;
    this->next = nullptr;
}

void node::link(node *next)
{
    this->next = next;
}

void node::traverse(node *n)
{
    std::cout << n->val << std::endl;
    if (n->next != nullptr)
    {
        traverse(n->next);
    }
}