import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

// test.describe.configure({mode: 'serial'}) //run sequence with 1 worker
test('Test ', async ({page}) => {    
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.inputNameTextbox("minhpham");
    await loginPage.inputPassTextbox("123456");
    await expect(1).toEqual(2);
});

test('Test 2', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.inputNameTextbox("mikel");
    await loginPage.inputPassTextbox("1231231");
});

