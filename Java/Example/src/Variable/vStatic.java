package Variable;

public class vStatic {
    // Variable static 'name'
    public static String name = "Nguyen Van A";
     
    // Variable static 'age'
    public static int age = 21;
 
    public static void main(String args[]) {
        // Used varialbe static by calling directly
        System.out.println("Name : " + name);
 
        // Used variable static by calling through the class name
        System.out.println("Age : " + vStatic.age);
    }

}
