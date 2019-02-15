package employeeManager.payRoll;

import employeeManager.EMP_ABC;
import employeeManager.EMP_ABC_Business;
import employeeManager.EMP_T;

public class ABC_Business implements PayRoll {

	@Override
	public double payRoll(EMP_T employee) {
		return ((EMP_ABC) employee).getCoeffSalary() + EMP_ABC.basic_salary + ((EMP_ABC_Business) employee).tip();
	}

}
