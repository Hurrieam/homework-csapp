#ifndef _ARRAY_HPP_
#define _ARRAY_HPP_

#include <iostream>
#include <exception>

template <class T>
class Array
{
protected:
    T *head;
    T *tail;
    unsigned int size;
    unsigned int capacity;

public:
    Array();
    Array(unsigned int capacity);

    void append(T value);
    void insert(unsigned int index, T new_value);

    void remove(unsigned int index);

    void update(unsigned int index, T new_value);

    void display();
};

template <class T>
Array<T>::Array()
{
    this->head = new T[100];
    this->tail = (&(this->head[100])) + 1;
    this->size = 0;
    this->capacity = 100;
}

template <class T>
Array<T>::Array(unsigned int capacity)
{
    this->head = new T[capacity];
    this->tail = (&(this->head[capacity])) + 1;
    this->size = 0;
    this->capacity = capacity;
}

template <class T>
void Array<T>::append(T value)
{
    if (this->size < this->capacity)
    {
        this->head[this->size] = value;
        this->size++;
    }
    else
    {
        throw "容量不够！";
    }
}

template <class T>
void Array<T>::insert(unsigned int index, T new_value)
{
    if (this->size < this->capacity)
    {
        for (int i = this->size - 1; i >= index; i--)
        {
            this->head[i + 1] = this->head[i];
        }
        this->head[index] = new_value;
        this->size++;
    }
    else
    {
        throw "容量不够！";
    }
}

template <class T>
void Array<T>::remove(unsigned int index)
{
    if (this->size != 0)
    {
        for (int i = index; i <= this->size - 1; i++)
        {
            this->head[i] = this->head[i + 1];
        }
        this->size--;
    }
    else
    {
        throw "容量为空！";
    }
}

template <class T>
void Array<T>::update(unsigned int index, T new_value)
{
    this->head[index] = new_value;
}

template <class T>
void Array<T>::display()
{
    for (int i = 0; i < this->size; i++)
    {
        std::cout << this->head[i] << " ";
    }
    std::cout << std::endl;
}

#endif