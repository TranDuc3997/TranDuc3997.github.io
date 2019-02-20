package employeeManager.searchEmployee;

import java.util.ArrayList;
import java.util.List;

import employeeManager.EMP_T;

//using Iterator pattern
public class List_EMP {
	private List<EMP_T> listEmp = new ArrayList<>();

	public void addItem(EMP_T item) {
		listEmp.add(item);
	}

	public EmpIterator<EMP_T> iterator() {
		return new MenuItemIterator();
	}

	class MenuItemIterator implements EmpIterator<EMP_T> {
		private int currentIndex = 0;

		@Override
		public boolean hasNext() {
			return currentIndex < listEmp.size();
		}

		@Override
		public EMP_T next() {
			return listEmp.get(currentIndex++);
		}
	}

}
