import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.describe.configure({mode: 'serial'}) //run sequence with 1 worker
test('Test ', async ({page, context}) => {    
    const loginPage = new LoginPage(page);
    const data = require('../data/login.data.json')
    await loginPage.open();
    await loginPage.inputNameTextbox(data.name);
    await loginPage.inputPassTextbox(data.password);
    await loginPage.clickLoginButton();
    await expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html')

});

// test('Test 2', async ({page}) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.open();
//     await loginPage.inputNameTextbox("mikel");
//     await loginPage.inputPassTextbox("1231231");
// });

