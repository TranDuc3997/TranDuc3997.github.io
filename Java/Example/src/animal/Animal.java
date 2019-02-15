package animal;

public class Animal {
	String Type;
	String Name;
	String Living;

	public Animal(String type, String name, String living) {
		super();
		Type = type;
		Name = name;
		Living = living;
	}

	public String getType() {
		return Type;
	}

	public void setType(String type) {
		Type = type;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getLiving() {
		return Living;
	}

	public void setLiving(String living) {
		Living = living;
	}

	public void run() {
		// do something
	}

	public void eat() {
		// do something
	}

	public void myName() {
		System.out.println(Name);
	}
}
