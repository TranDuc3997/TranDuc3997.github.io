package employeeManager.payRoll;

import employeeManager.EMP_T;

//Using Facade Pattern
public class payRollFacade {
	private static final payRollFacade INSTANCE = new payRollFacade();
	private Strategy_Payroll strategy;
	private ABC_Admin admin;
	private ABC_Business business;
	private ABC_Production production;
	private BCD bcd;

	//Create new objects
	private payRollFacade() {
		strategy = new Strategy_Payroll();
		admin = new ABC_Admin();
		business = new ABC_Business();
		production = new ABC_Production();
		bcd = new BCD();
	}

	// return new objects payRollFacade
	public static payRollFacade getInstance() {
		return INSTANCE;
	}

	//call payroll method of Admin
	public double payRollAbcAdmin(EMP_T employee) {
		strategy.setPayStrategy(admin);
		return strategy.payRoll(employee);
	}
	//call payroll method of Business
	public double payRollAbcBusiness(EMP_T employee) {
		strategy.setPayStrategy(business);
		return strategy.payRoll(employee);
	}
    
	//call payroll method of Production
	public double payRollAbcProduction(EMP_T employee) {
		strategy.setPayStrategy(production);
		return strategy.payRoll(employee);
	}

	//call payroll method of BCD
	public double payRollBCD(EMP_T employee) {
		strategy.setPayStrategy(bcd);
		return strategy.payRoll(employee);
	}

}
