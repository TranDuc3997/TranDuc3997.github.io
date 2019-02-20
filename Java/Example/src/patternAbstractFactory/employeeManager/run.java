package employeeManager;

import employeeManager.EMP_ABC_Admin;
import employeeManager.importEmp.EMP_Factory;
import employeeManager.importEmp.EmployeeType;
import employeeManager.searchEmployee.EmpIterator;
import employeeManager.searchEmployee.List_EMP;

public class Run {
	public static void main(String[] args) {
		List_EMP list = new List_EMP();

		list.addItem(EMP_Factory.getInstance(
				new EMP_ABC_Admin("NV001", "Le Dat", "1997", "Nam", 5.0, 2016, "Truong Phong", 6.0),
				EmployeeType.ABC_Admin));
		list.addItem(
				EMP_Factory.getInstance(new EMP_ABC_Business("NV002", "Le Duc", "1997", "Nam", 2.34, 2015, 1200, 1000),
						EmployeeType.ABC_Business));
		list.addItem(EMP_Factory.getInstance(new EMP_ABC_Production("NV003", "Tran Duc", "1997", "Nam", 3.3, 2014, 1),
				EmployeeType.ABC_Production));
		list.addItem(EMP_Factory.getInstance(new EMP_BCD("NV002", "Thanh Quang", 1000000), EmployeeType.BCD));

		EmpIterator<EMP_T> iterator = list.iterator();
		while (iterator.hasNext()) {
			EMP_T item = iterator.next();
			item.export();
		}

	}
}
