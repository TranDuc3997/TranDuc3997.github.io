package employeeManager;

abstract public class EMP_T {
	private String id, name;

	public EMP_T() {
	};

	public EMP_T(String id, String name) {
		this.id = id;
		this.name = name;
	}

	public EMP_T(EMP_T emp) {
		this.id = emp.getId();
		this.name = emp.getName();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void export() {
		System.out.println("*********************************************");
		System.out.println("ID: " + this.id);
		System.out.println("Name: " + this.name);
		System.out.println("Payroll: " + payRoll());
		System.out.println("Rank Emulation: " + rankEmulation());
	}
	
	abstract public double payRoll();

	abstract public String rankEmulation();
}
