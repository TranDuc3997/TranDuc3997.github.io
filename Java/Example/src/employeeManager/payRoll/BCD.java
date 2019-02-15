package employeeManager.payRoll;

import employeeManager.EMP_BCD;
import employeeManager.EMP_T;

public class BCD implements PayRoll {

	@Override
	public double payRoll(EMP_T employee) {
		return ((EMP_BCD) employee).getEarned() * 0.15;
	}

}
