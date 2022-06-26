#include <iostream>
#include <vector>

using namespace std;

class Solution
{
public:
    double average(vector<int> &salary)
    {
        salary.erase(max_element(salary.begin(), salary.end()));
        salary.erase(min_element(salary.begin(), salary.end()));

        auto sum = 0;
        for (int i = 0; i < salary.size(); i++)
        {
            sum += salary[i];
        }

        return static_cast<double>(sum) / salary.size();
    }
};

int main()
{
    Solution s;
    vector<int> v{48000, 59000, 99000, 13000, 78000, 45000, 31000, 17000, 39000, 37000, 93000, 77000, 33000, 28000, 4000, 54000, 67000, 6000, 1000, 11000};
    cout << s.average(v) << endl;

    return 0;
}