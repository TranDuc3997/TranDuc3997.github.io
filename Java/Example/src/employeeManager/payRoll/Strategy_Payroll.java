package employeeManager.payRoll;

import employeeManager.EMP_T;

public class Strategy_Payroll {
	PayRoll pay;

	public void setPayStrategy(PayRoll pay) {
		this.pay = pay;
	}

	public double payRoll(EMP_T employee) {
		return pay.payRoll(employee);
	}
}
