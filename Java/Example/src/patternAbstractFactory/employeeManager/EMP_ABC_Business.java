package employeeManager;

import employeeManager.payRoll.payRollFacade;

public class EMP_ABC_Business extends EMP_ABC {
	private double revenue;
	private double min_revenue;

	//inherit the parent class constructor
	public EMP_ABC_Business(String id, String name, String birthDay, String gender, double coeffSalary, int yofW,
			double revenue, double min_revenue) {
		super(id, name, birthDay, gender, coeffSalary, yofW);
		this.revenue = revenue;
		this.min_revenue = min_revenue;
	}

	//inherit the parent class constructor
	public EMP_ABC_Business(EMP_T emp) {
		super(emp);
		EMP_ABC_Business business = (EMP_ABC_Business) emp;
		this.revenue = business.revenue;
		this.min_revenue = business.min_revenue;
	}

	public double getRevenue() {
		return revenue;
	}

	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}

	public double getMin_revenue() {
		return min_revenue;
	}

	public void setMin_revenue(double min_revenue) {
		this.min_revenue = min_revenue;
	}

	//inherit the parent class payRoll method
	@Override
	public double payRoll() {
		return payRollFacade.getInstance().payRollAbcBusiness(this);
	}

	//inherit the parent class rank method
	@Override
	public char rank() {
		if (revenue < min_revenue * 0.5)
			return 'D';
		else if (revenue < min_revenue)
			return 'C';
		else if (revenue < min_revenue * 2)
			return 'B';
		return 'A';
	}

	//return tip of bussiness
	public double tip() {
		double over = revenue - min_revenue;
		if (over > 0)
			return 0.15 * over;
		return 0;
	}

	
	public void export() {
		super.export();
		System.out.println("Revenue " + this.revenue);
		System.out.println("Min Revenue " + this.min_revenue);
	}
}
