#include <iostream>

using namespace std;

int main()
{
    cout << "ab*cd=ef: " << endl;
    for (int a = 0; a < 10; a++)
    {
        for (int b = 0; b < 10; b++)
        {
            for (int c = 0; c < 10; c++)
            {
                for (int d = 0; d < 10; d++)
                {
                    for (int e = 0; e < 10; e++)
                    {
                        for (int f = 0; f < 10; f++)
                        {
                            if ((a * 10 + b) * (c * 10 + d) == (e * 10 + f))
                            {
                                ::printf("%d%d*%d%d=%d%d\n", a, b, c, d, e, f);
                            }
                        }
                    }
                }
            }
        }
    }
    cout << endl;

    cout << "ab/cd=ef: " << endl;
    for (int a = 0; a < 10; a++)
    {
        for (int b = 0; b < 10; b++)
        {
            for (int c = 0; c < 10; c++)
            {
                for (int d = 0; d < 10; d++)
                {
                    for (int e = 0; e < 10; e++)
                    {
                        for (int f = 0; f < 10; f++)
                        {
                            if ((a * 10 + b) / (c * 10 + d) == (e * 10 + f))
                            {
                                ::printf("%d%d/%d%d=%d%d\n", a, b, c, d, e, f);
                            }
                        }
                    }
                }
            }
        }
    }

    return 0;
}