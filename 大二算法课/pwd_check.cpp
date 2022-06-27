#include <iostream>

using namespace std;

char alphabet[] = {'\0', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                   'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                   'W', 'X', 'Y', 'Z',
                   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                   'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                   'w', 'x', 'y', 'z'}; // 大小写字母和数字一共62个
int status[123];                        // 62个密码的状态 0未使用 1已使用 ASCII最大到z 122
int pwd[6];                             // 五位密码

int n = 6;

void dfs(int step)
{
    if (step == n)
    {
        for (int i = 1; i <= 5; i++)
        {
            printf("%c", pwd[i]);
        }
        printf("\n");
        return;
    }

    for (int i = 1; i <= 62; i++)
    {
        if (status[alphabet[i]] == 0)
        {
            pwd[step] = alphabet[i];
            status[alphabet[i]] = 1;
            dfs(step + 1);
            status[alphabet[i]] = 0;
        }
    }
}

int main()
{
    dfs(1);
    return 0;
}