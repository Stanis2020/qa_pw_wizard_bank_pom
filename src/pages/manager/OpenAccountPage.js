import { expect } from '@playwright/test';

export class OpenAccountPage {
  constructor(page) {
    this.page = page;
    this.accountCurrencyDropDown = page.getByTestId('currency');
    this.accountCustomersDropDown = page.getByTestId('userSelect');
    this.processButton = page.getByRole('button', { name: 'Process'});
  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/openAccount',
    );
  }

  async chooseDollarCurrency(currency) {
    await this.accountCurrencyDropDown.selectOption(currency);
  }

  async chooseCustomer(customer) {
    await this.accountCustomersDropDown.selectOption(customer);
  }

  async assertShownCurrencyValue(value) {
    await expect(this.accountCurrencyDropDown).toHaveValue(value);
  }

  async clickProcessButton() {
    await this.processButton.click();
  }
}
