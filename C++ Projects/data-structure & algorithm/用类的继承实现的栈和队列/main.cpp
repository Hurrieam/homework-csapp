#include <iostream>
#include "Array.hpp"
#include "Stack.hpp"
#include "Queue.hpp"

int main(int argc, const char **argv)
{
    Array<int> arr(100);
    for (int i = 1; i <= 5; i++)
    {
        arr.append(i);
    }
    arr.insert(1, 6);
    arr.remove(1);
    arr.display();

    Stack<int> st(100);
    for (int i = 1; i <= 5; i++)
    {
        st.append(i);
    }
    st.remove();
    st.display();

    Queue<int> qu(100);
    for (int i = 1; i <= 5; i++)
    {
        qu.append(i);
    }
    qu.remove();
    qu.display();
}