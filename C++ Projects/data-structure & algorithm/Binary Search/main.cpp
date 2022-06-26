#include <iostream>
#include "bin_search.hpp"

using namespace std;

int main()
{
    int *arr = new int[100000000];
    for (int i = 0; i < 100000000; i++)
    {
        arr[i] = 100000000 - i;
    }

    int index = bin_search(arr, 100000000, INT_MAX);

    cout << index << endl;

    delete[] arr;

    return 0;
}