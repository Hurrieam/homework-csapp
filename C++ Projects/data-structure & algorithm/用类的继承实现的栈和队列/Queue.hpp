#ifndef _QUEUE_HPP_
#define _QUEUE_HPP_

#include "Array.hpp"

template <class T>
class Queue : public Array<T>
{
public:
    Queue(unsigned int capacity);

    void append(T value);
    void insert(unsigned int index, T new_value);

    void remove();

    void update(unsigned int index, T new_value);

    void display();
};

template <class T>
Queue<T>::Queue(unsigned int capacity)
{
    this->head = new T[capacity];
    this->tail = this->head + 1;
}

template <class T>
void Queue<T>::append(T value)
{
    *(this->tail) = value;
    ++this->size;
    ++this->tail;
}

template <class T>
void Queue<T>::insert(unsigned int index, T new_value)
{
    return;
}

template <class T>
void Queue<T>::remove()
{
    --this->size;
    ++this->head;
}

template <class T>
void Queue<T>::update(unsigned int index, T new_value)
{
    return;
}

template <class T>
void Queue<T>::display()
{
    std::cout << *(this->head + 1) << std::endl;
}

#endif