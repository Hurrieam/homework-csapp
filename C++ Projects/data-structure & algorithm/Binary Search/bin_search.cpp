#include "bin_search.hpp"

#include <algorithm>

int bin_search(int *arr, int len, int elem)
{
    int *arr_copy = new int[len];
    for (int i = 0; i < len; i++)
    {
        arr_copy[i] = arr[i];
    }
    std::sort(arr_copy, arr_copy + len);

    int first = 0;
    int last = len - 1;

    int iter = first + (last - first) / 2;

    while (arr_copy[iter] != elem)
    {
        if (arr_copy[iter] < elem)
        {
            first = iter;
            iter = first + (last - first) / 2;
        }
        if (arr_copy[iter] > elem)
        {
            last = iter;
            iter = first + (last - first) / 2;
        }

        // 未找到
        if ((first == iter) && (arr_copy[iter] != elem))
        {
            delete[] arr_copy;
            return -1;
        }
    }

    delete[] arr_copy;
    return iter;
}