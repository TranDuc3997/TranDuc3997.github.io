package employeeManager.importEmp;

import employeeManager.EMP_ABC_Admin;
import employeeManager.EMP_ABC_Business;
import employeeManager.EMP_ABC_Production;
import employeeManager.EMP_BCD;
import employeeManager.EMP_T;

//Abstract Factory Pattern and Singleton Pattern
public class EMP_Factory {
	private static EMP_T instance;

	private EMP_Factory() {

	}

	public static EMP_T getInstance(EMP_T emp, EmployeeType empType) {
		switch (empType) {
		case ABC_Admin:
			instance = new EMP_ABC_Admin(emp);
			break;
		case ABC_Business:
			instance = new EMP_ABC_Business(emp);
			break;
		case ABC_Production:
			instance = new EMP_ABC_Production(emp);
			break;
		case BCD:
			instance = new EMP_BCD(emp);
			break;
		default:
			throw new IllegalArgumentException("The company is unavailable");
		}
		return instance;
	}
}
