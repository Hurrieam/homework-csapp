#include <iostream>
#include <vector>
#include <unordered_set>
#include <string>

using namespace std;

class Solution
{
public:
    int secondHighest(string s)
    {
        vector<int> sorted_nums; // 排序
        unordered_set<int> nums; // 去重
        for (auto chr : s)
        {
            if (isdigit(chr))
            {
                nums.insert(chr - 48);
            }
        }

        for (auto num : nums)
        {
            sorted_nums.push_back(num);
        }
        sort(sorted_nums.begin(), sorted_nums.end());

        if (sorted_nums.size() == 1 || sorted_nums.empty())
            return -1;

        return sorted_nums[sorted_nums.size() - 2];
    }
};

int main()
{
    Solution s;
    cout << s.secondHighest("xyz") << endl;

    return 0;
}