class Complex {
    private final double realPart;
    private final double imaginaryPart;

    public Complex(double newRealPart, double newImaginaryPart){
        this.realPart = newRealPart;
        this.imaginaryPart = newImaginaryPart;
    }

    public double getRealPart(){
        return realPart;
    }

    public double getImaginaryPart(){
        return imaginaryPart;
    }

    public static void Print(Complex num){
        System.out.println(num.getRealPart() + "+" + num.getImaginaryPart() + "i");
    }

    public static Complex Plus(Complex num_1, Complex num_2){
        return new Complex(num_1.realPart + num_2.realPart, num_1.imaginaryPart + num_2.imaginaryPart);
    }

    public static Complex Minus(Complex num_1, Complex num_2){
        return new Complex(num_1.realPart - num_2.realPart, num_1.imaginaryPart - num_2.imaginaryPart);
    }

    public static Complex Multiply(Complex num_1, Complex num_2){
        return new Complex(num_1.realPart * num_2.realPart - num_1.imaginaryPart * num_2.imaginaryPart, num_1.imaginaryPart * num_2.realPart + num_1.realPart * num_2.imaginaryPart);
    }

    public static Complex Divide(Complex num_1, Complex num_2){
        final double f = num_2.realPart * num_2.realPart + num_2.imaginaryPart * num_2.imaginaryPart;//分母
        return new Complex((num_1.realPart * num_2.realPart + num_1.imaginaryPart * num_2.imaginaryPart) / f, (num_1.imaginaryPart * num_2.realPart - num_1.realPart * num_2.imaginaryPart) / f);
    }
}
