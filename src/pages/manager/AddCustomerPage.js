import { expect } from '@playwright/test';

export class AddCustomerPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByPlaceholder('First Name');
    this.lastNameField = page.getByPlaceholder('Last Name');
    this.postCodeNameField = page.getByPlaceholder('Post Code');
    this.submitFormButton = page.getByRole('form').getByRole('button', { name: 'Add Customer'});
  }

  async open() {
    await this.page.goto(
      '/angularJs-protractor/BankingProject/#/manager/addCust',
    );
  }

  async fillFirstName(name) {
    await this.firstNameField.fill(name);
  }

  async fillLastName(lastName) {
    await this.lastNameField.fill(lastName);
  }

  async fillPostalCodeName(postCode) {
    await this.postCodeNameField.fill(postCode);
  }

  async clickAddCustomerButton() {
    await this.submitFormButton.click();
  }

}
