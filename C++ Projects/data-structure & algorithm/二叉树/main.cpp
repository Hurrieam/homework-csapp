#include <iostream>
#include "bin_tree.hpp"

using namespace std;

int main()
{
    node a(0);
    node b(1);
    node c(2);

    a.link_left(b);
    a.link_right(c);

    node::traverse(&a);

    return 0;
}