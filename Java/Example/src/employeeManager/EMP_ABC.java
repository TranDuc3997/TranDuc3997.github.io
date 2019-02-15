package employeeManager;

import java.util.Calendar;

public abstract class EMP_ABC extends EMP_T {
	protected String birthDay;
	private String gender;
	private double coeffSalary;
	private int YofW;

	public EMP_ABC(String id, String name, String birthDay, String gender, double coeffSalary, int yofW) {
		super(id, name);
		this.birthDay = birthDay;
		this.gender = gender;
		this.coeffSalary = coeffSalary;
		YofW = yofW;
	}

	public EMP_ABC(EMP_T emp) {
		super(emp);
		EMP_ABC abc = (EMP_ABC) emp;
		this.birthDay = abc.getBirthDay();
		this.gender = abc.getGender();
		this.coeffSalary = abc.getCoeffSalary();
		YofW = abc.getYofW();
	}

	public static double basic_salary = 1150;

	public String getBirthDay() {
		return birthDay;
	}

	public void setBirthDay(String birthDay) {
		this.birthDay = birthDay;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public double getCoeffSalary() {
		return coeffSalary;
	}

	public void setCoeffSalary(double coeffSalary) {
		this.coeffSalary = coeffSalary;
	}

	public int getYofW() {
		return YofW;
	}

	public void setYofW(int yofW) {
		YofW = yofW;
	}

	@Override
	abstract public double payRoll();

	abstract public char rank();

	public double seniorityAllowances() {
		int currentYear = Calendar.getInstance().get(Calendar.YEAR);
		return (currentYear >= 5) ? currentYear * EMP_ABC.basic_salary / 100 : 0;
	}

	public double income() {
		double compen = 0;
		switch (rank()) {
		case 'A':
			compen = payRoll();
			break;
		case 'B':
			compen = payRoll() * 0.75;
			break;
		case 'C':
			compen = payRoll() * 0.5;
			break;
		default:
			break;
		}
		return payRoll() + compen + seniorityAllowances();
	}

	@Override
	public String rankEmulation() {

		if (rank() == 'A')
			return "Chien si thi dua";
		if (rank() == 'B')
			return "Lao dong tien tien";
		return "";
	}

	@Override
	public void export() {
		super.export();
		System.out.println("Birth Day: " + this.birthDay);
		System.out.println("Gender " + this.gender);
		System.out.println("CoeffSalary: " + this.coeffSalary);
		System.out.println("Year Of Weak:  " + this.YofW);
	}
}
