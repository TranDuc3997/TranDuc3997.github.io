package employeeManager;

import employeeManager.payRoll.payRollFacade;

public class EMP_BCD extends EMP_T {
	private double earned;

	public EMP_BCD() {
		super();
	}

	public EMP_BCD(String id, String name, double earned) {
		super(id, name);
		this.earned = earned;
	}

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

	@Override
	public double payRoll() {
		return payRollFacade.getInstance().payRollBCD(this);
	}

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
