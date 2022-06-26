#include <iostream>
#include "BinarySortedTree.hpp"
// #include "DynamicArray.hpp"

int main(int argc, const char **argv)
{

    BinarySortedTree bst(10);
    for (int i = 1; i <= 5; i++)
    {
        bst.insert(i);
    }
    bst.middleTraverse();

    /*
    DynamicArray<int> da;
    for (int i = 1; i <= 10; i++)
    {
        da.append(i);
    }
    da.remove(2);
    da.insert(2, 3);
    da.show();
    */

    return 0;
}