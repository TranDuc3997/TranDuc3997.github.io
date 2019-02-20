package employeeManager.payRoll;

import employeeManager.EMP_ABC;
import employeeManager.EMP_ABC_Admin;
import employeeManager.EMP_T;

public class ABC_Admin implements PayRoll {
	public double payRoll(EMP_T employee) {
		return ((EMP_ABC) employee).getCoeffSalary() * EMP_ABC_Admin.basic_salary + ((EMP_ABC_Admin) employee).allowancePos(); 
	}
}