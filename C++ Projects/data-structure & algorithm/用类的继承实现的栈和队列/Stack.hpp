#ifndef _STACK_HPP_
#define _STACK_HPP_

#include "Array.hpp"

template <class T>
class Stack : public Array<T>
{
public:
    Stack(unsigned int capacity);

    void append(T value);
    void insert(unsigned int index, T new_value);

    void remove();

    void update(unsigned int index, T new_value);

    void display();
};

template <class T>
Stack<T>::Stack(unsigned int capacity)
{
    this->head = new T[capacity];
    this->tail = this->head + 1;
    this->size = 0;
    this->capacity = capacity;
}

template <class T>
void Stack<T>::append(T value)
{
    *(this->tail) = value;
    ++this->size;
    ++this->tail;
}

template <class T>
void Stack<T>::insert(unsigned int index, T new_value)
{
    return;
}

template <class T>
void Stack<T>::remove()
{
    --this->size;
    --this->tail;
}

template <class T>
void Stack<T>::update(unsigned int index, T new_value)
{
    return;
}

template <class T>
void Stack<T>::display()
{
    std::cout << this->head[this->size] << std::endl;
}

#endif