#ifndef COMPLEX_HPP_
#define COMPLEX_HPP_

template<class R, class I>
class complex {
private:
	R real;
	I imaginary;

public:
	complex(R real, I imaginary) {
		this->real = real;
		this->imaginary = imaginary;
	}

	R getRealPart() {
		return this->real;
	}

	I getImaginaryPart() {
		return this->imaginary;
	}

	void disp() {
		if (this->real != 0) {
			if (this->imaginary == 0) {
				std::cout << this->real;
			} else {
				if (this->imaginary > 0) {
					if (this->imaginary != 1) {
						std::cout << "(" << this->real << "+" << this->imaginary
								<< "i)";
					} else {
						std::cout << "(" << this->real << "+i)";
					}
				} else {
					if (this->imaginary != -1) {
						std::cout << "(" << this->real << "-"
								<< -(this->imaginary) << "i)";
					} else {
						std::cout << "(" << this->real << "-i)";
					}
				}
			}
		} else {
			if (this->imaginary == 0) {
				std::cout << "0";
			} else {
				std::cout << this->imaginary << "i";
			}
		}
		std::cout << std::endl;
	}

	complex operator +(complex newComp) {
		return complex(this->real + newComp.real,
				this->imaginary + newComp.imaginary);
	}

	complex operator -(complex newComp) {
		return complex(this->real - newComp.real,
				this->imaginary - newComp.imaginary);
	}

	complex operator *(complex newComp) {
		return complex(
				this->real * newComp.real - this->imaginary * newComp.imaginary,
				this->imaginary * newComp.real + this->real * newComp.imaginary);
	}

	complex operator /(complex newComp) {
		return complex(
				(this->real * newComp.real + this->imaginary * newComp.imaginary)
						/ (newComp.real * newComp.real
								+ newComp.imaginary * newComp.imaginary),
				(this->imaginary * newComp.real - this->real * newComp.imaginary)
						/ (newComp.real * newComp.real
								+ newComp.imaginary * newComp.imaginary));
	}
};

#endif /* COMPLEX_HPP_ */
