#include<iostream>

#include "complex.hpp"

int main() {
	complex<double, double> a(1, 1);
	complex<double, double> b(2, 2);
	complex<double, double> c = a + b;
	complex<double, double> d = a - b;
	complex<double, double> e = a * b;
	complex<double, double> f = a / b;
	c.disp();
	d.disp();
	e.disp();
	f.disp();
	return 0;
}
