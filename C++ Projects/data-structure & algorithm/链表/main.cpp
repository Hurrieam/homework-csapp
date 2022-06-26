#include <iostream>
#include "linked_list.hpp"

using namespace std;

int main()
{
    node a(1);
    node b(2);
    node c(3);

    a.link(&c);
    c.link(&b);
    node::traverse(&a);

    return 0;
}