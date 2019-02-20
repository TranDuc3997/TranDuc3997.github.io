package employeeManager;

import employeeManager.payRoll.payRollFacade;

public class EMP_BCD extends EMP_T {
	private double earned; //value earned

	public EMP_BCD() {
		super();
	}
	//inherit the parent class constructor
	public EMP_BCD(String id, String name, double earned) {
		super(id, name);
		this.earned = earned;
	}
	//inherit the parent class constructor
	public EMP_BCD(EMP_T emp) {
		super(emp);
		EMP_BCD bcd = (EMP_BCD) emp;
		this.earned = bcd.getEarned();
	}

	public double getEarned() {
		return earned;
	}

	public void setEarned(double earned) {
		this.earned = earned;
	}

	//inherit the parent class payRoll method
	@Override
	public double payRoll() {
		return payRollFacade.getInstance().payRollBCD(this);
	}
	//inherit the parent class rankEmulation method
	@Override
	public String rankEmulation() {
		if (payRoll() >= 2000000)
			return "Chien si thi dua";
		if (payRoll() >= 1000000)
			return "Lao dong tien tien";
		return "Khong co danh hieu";
	}

	public void export() {
		super.export();
		System.out.println("Earned: " + this.earned);
	}
}
