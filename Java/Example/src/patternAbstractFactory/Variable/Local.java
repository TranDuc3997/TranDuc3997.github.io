package Variable;

public class local {
	public void sayHello() {
		int n = 10; // this is variable local
		System.out.println("Value of n : " + n);
	}

	public static void main(String[] args) {
		local var = new local();
		var.sayHello();
	}

}
