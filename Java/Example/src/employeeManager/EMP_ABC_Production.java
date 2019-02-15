package employeeManager;

import employeeManager.payRoll.payRollFacade;

public class EMP_ABC_Production extends EMP_ABC {
	private int restD;

	public EMP_ABC_Production(String id, String name, String birthDay, String gender, double coeffSalary, int yofW,
			int restD) {
		super(id, name, birthDay, gender, coeffSalary, yofW);
		this.restD = restD;
	}

	public EMP_ABC_Production(EMP_T emp) {
		super(emp);
		EMP_ABC_Production production = (EMP_ABC_Production) emp;
		this.restD = production.getRestD();
	}

	public int getRestD() {
		return restD;
	}

	public void setRestD(int restD) {
		this.restD = restD;
	}

	public static double heavy_allowance = 0.1;

	@Override
	public char rank() {
		if (restD <= 1)
			return 'A';
		if (restD <= 3)
			return 'B';
		if (restD <= 5)
			return 'C';
		return 'D';
	}

	@Override
	public double payRoll() {
		return payRollFacade.getInstance().payRollAbcProduction(this);
	}

	public void export() {
		super.export();
		System.out.println("Rest Day: " + this.restD);
	}

}
