#include<iostream>
#include"CppMallocAndFree.hpp"

using namespace std;

int main(int argc, const char **argv) {
	int *arr = (int*) MALLOC<int>(5 * sizeof(int));
	for (int i = 0; i < 5; i++) {
		arr[i] = i + 1;
	}
	for (int i = 0; i < 5; i++) {
		cout << arr[i] << " ";
	}

	FREE(arr);
	for (int i = 0; i < 5; i++) {
		cout << arr[i] << " ";
	}

	return 0;
}
