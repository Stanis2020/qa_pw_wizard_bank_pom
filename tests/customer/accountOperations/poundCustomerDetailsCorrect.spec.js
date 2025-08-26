import { test } from '@playwright/test';
import { CustomerLoginPage } from '../../../src/pages/customer/CustomerLoginPage';
import { CustomerAccountPage } from '../../../src/pages/customer/CustomerAccountPage';

test('Assert customer has correct bank data pound', async ({ page }) => {
  const loginPage = new CustomerLoginPage(page);
  const accountPage = new CustomerAccountPage(page);

  await loginPage.open();
  await loginPage.selectCustomer('Ron Weasly');
  await loginPage.clickLoginButton();
  await accountPage.assertAccountIdInDropDownHasValue('number:1007');
  await accountPage.selectAccountNumber('1008');
  await accountPage.assertAccountLineContainsText('Account Number : 1008');
  await accountPage.assertAccountLineContainsText('Balance : 0');
  await accountPage.assertAccountLineContainsText('Currency : Pound');
});