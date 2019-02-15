package employeeManager.payRoll;

import employeeManager.EMP_T;

public class payRollFacade {
	private static final payRollFacade INSTANCE = new payRollFacade();
	private Strategy_Payroll strategy;
	private ABC_Admin admin;
	private ABC_Business business;
	private ABC_Production production;
	private BCD bcd;

	private payRollFacade() {
		strategy = new Strategy_Payroll();
		admin = new ABC_Admin();
		business = new ABC_Business();
		production = new ABC_Production();
		bcd = new BCD();
	}

	public static payRollFacade getInstance() {
		return INSTANCE;
	}

	public double payRollAbcAdmin(EMP_T employee) {
		strategy.setPayStrategy(admin);
		return strategy.payRoll(employee);
	}

	public double payRollAbcBusiness(EMP_T employee) {
		strategy.setPayStrategy(business);
		return strategy.payRoll(employee);
	}

	public double payRollAbcProduction(EMP_T employee) {
		strategy.setPayStrategy(production);
		return strategy.payRoll(employee);
	}

	public double payRollBCD(EMP_T employee) {
		strategy.setPayStrategy(bcd);
		return strategy.payRoll(employee);
	}

}
