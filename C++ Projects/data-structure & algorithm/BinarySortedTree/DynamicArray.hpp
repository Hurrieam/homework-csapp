#ifndef _DYNAMIC_ARRAY_HPP_
#define _DYNAMIC_ARRAY_HPP_

#include <iostream>

template <class T>
class DynamicArray
{
private:
    unsigned int size;

    T *values;
    T *temp_values;

public:
    DynamicArray();

    void append(T value);
    void insert(unsigned int index, T value);

    void remove(unsigned int index);

    void update(unsigned int index, T value);

    void show();
};

template <class T>
DynamicArray<T>::DynamicArray()
{
    this->size = 0;
}

template <class T>
void DynamicArray<T>::append(T value)
{
    this->temp_values = new T[this->size + 1];
    for (int i = 0; i < this->size; i++)
    {
        this->temp_values[i] = this->values[i];
    }
    this->temp_values[this->size] = value;
    this->size++;
    this->values = new T[size];
    for (int i = 0; i < this->size; i++)
    {
        this->values[i] = this->temp_values[i];
    }
}

template <class T>
void DynamicArray<T>::insert(unsigned int index, T value)
{
    this->temp_values = new T[this->size + 1];
    for (int i = 0; i < this->size; i++)
    {
        this->temp_values[i] = this->values[i];
    }
    this->temp_values[index] = value;
    this->size++;

    for (int i = this->size - 1; i >= index; i--)
    {
        this->temp_values[i + 1] = this->temp_values[i];
    }

    this->values = new T[size];
    for (int i = 0; i < this->size; i++)
    {
        this->values[i] = this->temp_values[i];
    }
}

template <class T>
void DynamicArray<T>::remove(unsigned int index)
{
    for (int i = index; i <= this->size - 1; i++)
    {
        this->values[i] = this->values[i + 1];
    }
    this->size--;
}

template <class T>
void DynamicArray<T>::update(unsigned int index, T value)
{
    this->values[index] = value;
}

template <class T>
void DynamicArray<T>::show()
{
    for (int i = 0; i < this->size; i++)
    {
        std::cout << this->values[i] << " ";
    }
    std::cout << std::endl;
}

#endif