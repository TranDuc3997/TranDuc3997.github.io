package Variable;

public class instance {
	// variable instance "name" type String, has default value null
    public String name;
 
    // variable instance "age" type Integer, has default value 0
    private int age;
 
    // Used variable name in constructor
    public instance(String name) {
        this.name = name;
    }
 
    // use variable age in method setAge
    public void setAge(int age) {
        this.age = age;
    }
 
    public void showStudent() {
        System.out.println("Name  : " + name);
        System.out.println("Age : " + age);
    }
 
    public static void main(String args[]) {
        instance ins = new instance("Nguyen Van A");
        ins.setAge(21);
        ins.showStudent();
    }

}
