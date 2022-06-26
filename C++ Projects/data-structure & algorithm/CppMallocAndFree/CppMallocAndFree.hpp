#ifndef CPPMALLOCANDFREE_HPP_
#define CPPMALLOCANDFREE_HPP_

template<class T>
void* MALLOC(const std::size_t size) {
	T *newPtr;
	T **tempPtr = &newPtr;
	for (std::size_t i = 0; i < size; i++) {
		*tempPtr = new T;
		++tempPtr;
	}
	*tempPtr = NULL;
	delete tempPtr;
	return newPtr;
}

template<class T>
void FREE(T *deletedPtr) {
	T **tempPtr = &deletedPtr;
	while (tempPtr != NULL) {
		delete *tempPtr;
		++tempPtr;
	}
	delete tempPtr;
}

#endif /* CPPMALLOCANDFREE_HPP_ */
