public class Calculating {

    public static void main(String[] args){
        Complex complex_1 = new Complex(1, 2);
        Complex complex_2 = new Complex(3, 4);
        Complex complex_plus_result = Complex.Plus(complex_1, complex_2);
        Complex complex_minus_result = Complex.Minus(complex_1, complex_2);
        Complex complex_multiply_result = Complex.Multiply(complex_1, complex_2);
        Complex complex_divide_result = Complex.Divide(complex_1, complex_2);
        Complex.Print(complex_plus_result);
        Complex.Print(complex_minus_result);
        Complex.Print(complex_multiply_result);
        Complex.Print(complex_divide_result);
    }

}
