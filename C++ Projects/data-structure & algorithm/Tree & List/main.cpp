#include<iostream>

#include"BinaryTreeNode.h"
#include"LinkedListNode.h"

int main(int argc, char const *argv[])
{
	BinaryTreeNode A("A"), B("B"), C("C");
	A.set_left_child(B);
	A.set_right_child(C);
	A.traverse();

	std::cout << std::endl;

	LinkedListNode D("D"), E("E"), F("F");
	D.set_next_node(E);
	E.set_next_node(F);
	D.traverse();

	std::cout << std::endl;
	return 0;
}
