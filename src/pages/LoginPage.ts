import {Page, Locator} from '@playwright/test' 

export default class LoginPage {
    readonly _page : Page;
    readonly USERNAME_TXB:Locator;
    readonly PASSWORD_TXB:Locator; 
    readonly LOGIN_BTN:Locator;
    constructor(page:Page) {
        this._page = page
        this.USERNAME_TXB = this._page.locator("#user-name")
        this.PASSWORD_TXB = this._page.locator('#password')   
        this.LOGIN_BTN = this._page.locator('#login-button')    
    }
    
    async open(){
        await this._page.goto('/')
    }

    async inputNameTextbox(value: string){
        await this.USERNAME_TXB.fill(value)
    }

    async inputPassTextbox(value: string){
        await this.PASSWORD_TXB.fill(value)
    } 

    async clickLoginButton(){
        await this.LOGIN_BTN.click()
    } 
    
}