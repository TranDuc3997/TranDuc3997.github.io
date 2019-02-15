package Overloading;

public class Calculator {
	public static int sum(int a, int b) {
		return a + b;
	}

	// Overloading
	public static int sum(int a, int b, int c) {
		return a + b + c;
	}
}
