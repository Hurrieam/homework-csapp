#ifndef _BINARY_SORTED_TREE_HPP_
#define _BINARY_SORTED_TREE_HPP_

#include <iostream>

class BinarySortedTree
{
private:
    int value;
    BinarySortedTree *left_child;
    BinarySortedTree *right_child;

public:
    BinarySortedTree(int root_value);

    void middleTraverse();
    void search(const int value);
    void insert(const int value);
};

BinarySortedTree::BinarySortedTree(int root_value)
{
    this->value = root_value;
    this->left_child = nullptr;
    this->right_child = nullptr;
}

void BinarySortedTree::middleTraverse()
{
    this->left_child->middleTraverse();
    std::cout << this->value << std::endl;
    this->right_child->middleTraverse();
}

void BinarySortedTree::search(const int value)
{
    BinarySortedTree *temp_ptr = this;
    while (temp_ptr != nullptr)
    {
        if (temp_ptr->value == value)
        {
            std::cout << "找到了！" << std::endl;
            break;
        }
        else
        {
            if (temp_ptr->value > value)
            {
                temp_ptr = temp_ptr->right_child;
            }
            if (temp_ptr->value < value)
            {
                temp_ptr = temp_ptr->left_child;
            }
        }
    }
    std::cout << "未找到！" << std::endl;
    delete temp_ptr;
}

void BinarySortedTree::insert(const int value)
{
    BinarySortedTree *temp_ptr = this;
    while (temp_ptr != nullptr)
    {
        if (temp_ptr->value > value)
        {
            temp_ptr = temp_ptr->left_child;
        }
        else if (temp_ptr->value < value)
        {
            temp_ptr = temp_ptr->right_child;
        }
        else if (temp_ptr->value == value)
        {
            break;
        }
    }
    if (temp_ptr == nullptr)
    {
        temp_ptr = new BinarySortedTree(value);
    }
}

#endif