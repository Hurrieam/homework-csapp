#include <iostream>
#include <vector>
using namespace std;

void prompt(vector<int> vec)
{
    for (int i = 0; i < vec.size(); i++)
    {
        cout << vec[i] << " ";
    }
}

vector<int> bubble_sort(vector<int> vec)
{
    for (int i = 0; i < vec.size() - 1; i++)
    {
        for (int j = vec.size() - 1; j > i; j--)
        {
            if (vec[j] < vec[j - 1])
            {
                int t = vec[j];
                vec[j] = vec[j - 1];
                vec[j - 1] = t;
            }
        }
    }
    return vec;
}

int main()
{
    int arr[] = {9, 5, 2, 10, 6, 8, 4, 7, 3, 1};
    vector<int> arr_vec;
    for (int i = 0; i < 10; i++)
    {
        arr_vec.push_back(arr[i]);
    }

    vector<int> sorted_vec = bubble_sort(arr_vec);
    prompt(sorted_vec);
    return 0;
}