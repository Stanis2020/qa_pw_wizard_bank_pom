import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { BankManagerMainPage } from '../../../src/pages/manager/BankManagerMainPage';
import { CustomersListPage } from '../../../src/pages/manager/CustomersListPage';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const postalCode = faker.location.zipCode();

test.beforeEach(async ({ page }) => {
  const addCustomerPage = new AddCustomerPage(page);
    
  await addCustomerPage.open();
  await addCustomerPage.fillFirstName(firstName);
  await addCustomerPage.fillLastName(lastName);
  await addCustomerPage.fillPostalCodeName(postalCode);
  await addCustomerPage.clickAddCustomerButton();
});
  /* 
  Pre-conditons:
  1. Open Add Customer page.
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  */
test('Assert manager can search customer by Postal Code', async ({ page }) => {
  const bankManagerMainPage = new BankManagerMainPage(page);
  const customersListPage = new CustomersListPage(page);
  
  await bankManagerMainPage.clickCustomersButton();
  await customersListPage.fillSearchField(postalCode);
  await customersListPage.assertFirstCustomer(postalCode);
  await customersListPage.assertTableRawsAmount(1);
});

  /* 
  Test:
  1. Open Customers page.
  2. Fill the postalCode to the search field
  3. Assert customer row is present in the table. 
  4. Assert no other rows is present in the table.
  */