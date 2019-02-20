package employeeManager.payRoll;

import employeeManager.EMP_ABC;
import employeeManager.EMP_ABC_Production;
import employeeManager.EMP_T;

public class ABC_Production implements PayRoll {

	@Override
	public double payRoll(EMP_T employee) {
		return ((EMP_ABC) employee).getCoeffSalary() * EMP_ABC.basic_salary * (1 + EMP_ABC_Production.heavy_allowance);
	}

}
