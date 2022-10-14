import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('Test ', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.inputNameTextbox();
    await loginPage.inputPassTextbox();
});