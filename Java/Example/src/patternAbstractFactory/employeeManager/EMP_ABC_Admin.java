package employeeManager;

import employeeManager.payRoll.payRollFacade;

public class EMP_ABC_Admin extends EMP_ABC {
	private String postion; // The positions in company
	private double pos_coeff; //Position coefficient

    //inherit the parent class constructor
	public EMP_ABC_Admin(String id, String name, String birthDay, String gender, double coeffSalary, int yofW,
			String postion, double pos_coeff) {
		super(id, name, birthDay, gender, coeffSalary, yofW);
		this.postion = postion;
		this.pos_coeff = pos_coeff;
	}
	
	//inherit the parent class constructor
	public EMP_ABC_Admin(EMP_T emp) {
		super(emp);
		EMP_ABC_Admin admin = (EMP_ABC_Admin) emp;
		this.postion = admin.getPostion();
		this.pos_coeff = admin.pos_coeff;
	}

	public String getPostion() {
		return postion;
	}

	public void setPostion(String postion) {
		this.postion = postion;
	}

	public double getPos_coeff() {
		return pos_coeff;
	}

	public void setPos_coeff(double pos_coeff) {
		this.pos_coeff = pos_coeff;
	}

	//inherit the parent class payRoll method
	@Override
	public double payRoll() {
		return payRollFacade.getInstance().payRollAbcAdmin(this);
	}

	//inherit the parent class rank method
	@Override
	public char rank() {
		return 'A';
	}

	//inherit the parent class payRoll method
	@Override
	public void export() {
		super.export();
		System.out.println("Postion: " + this.postion);
	}
	// return allowance posttion
	public double allowancePos() {
		return pos_coeff * 1100;
	}
}
