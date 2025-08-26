import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.lastAddedCustomer = page.locator('tbody tr').last();
    this.tableBodyRaw = page.locator('tbody tr');
    this.searchField = page.getByPlaceholder('Search Customer');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }

  async assertNewUsernameInfo(text) {
    await expect(this.lastAddedCustomer).toContainText(text);
  }

  async assertHiddenNewCustomer() {
    await expect(this.lastAddedCustomer).toBeHidden();
  }

  async assertEmptyAccountNumber() {
    await expect(this.lastAddedCustomer.locator('td').nth(3)).toHaveText('');
  }

  async assertHaveAccountNumber() {
    await expect(this.lastAddedCustomer.locator('td').nth(3)).not.toHaveText('');
  }

  async clickDeleteLastUser() {
    await this.lastAddedCustomer.getByRole('button', { name: 'Delete'}).click();
  }

  async assertLastRawNotToContainText(text) {
    await expect(this.lastAddedCustomer).not.toContainText(text);
  }

  async assertVisibleNewCustomer(text) {
    await expect(this.lastAddedCustomer).toContainText(text);
  }

  async fillSearchField(text) {
    await this.searchField.fill(text);
  }

  async assertFirstCustomer(text) {
    await expect(this.tableBodyRaw.first()).toContainText(text);
  }

  async assertTableRawsAmount(value) {
    const raws = await this.tableBodyRaw.all();
    expect(raws.length).toEqual(value);
  }
}
