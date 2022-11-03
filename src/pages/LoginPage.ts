import {Page, Locator} from '@playwright/test' 
import  ElementUtil  from '../utils/ElementUtil';
const LOGIN_BTN='#login-button';
const USERNAME_TXB= '#user-name'
const PASSWORD_TXB = '#password'

export default class LoginPage extends ElementUtil{
    readonly _page : Page;
    readonly _USERNAME_TXB:Locator;
    readonly _PASSWORD_TXB:Locator; 

    constructor(page:Page) {
        super(page)
        this._page = page
    }
    
    async open(){
        await this._page.goto('/')
    }

    async inputNameTextbox(value: string){
        await (await this.getElement(USERNAME_TXB)).fill(value)
    }

    async inputPassTextbox(value: string){
        await (await this.getElement(PASSWORD_TXB)).fill(value)
    } 

    async clickLoginButton(){
        const ele = await this.getElement(LOGIN_BTN);
        await ele.click();
    } 
    
}