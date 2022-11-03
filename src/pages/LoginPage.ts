import {Page, Locator} from '@playwright/test' 
import  ElementUtil  from '../utils/ElementUtil';
const LOGIN_BTN='#login-buttonxx';

export default class LoginPage extends ElementUtil{
    private elementUtil : ElementUtil;
    readonly _page : Page;
    readonly _USERNAME_TXB:Locator;
    readonly _PASSWORD_TXB:Locator; 

    constructor(page:Page) {
        super(page)
        this._page = page
        this._USERNAME_TXB = this._page.locator("#user-name")
        this._PASSWORD_TXB = this._page.locator('#password')   
  
    }
    
    async open(){
        await this._page.goto('/')
    }

    async inputNameTextbox(value: string){
        await this._USERNAME_TXB.fill(value)
    }

    async inputPassTextbox(value: string){
        await this._PASSWORD_TXB.fill(value)
    } 

    async clickLoginButton(){
        const ele = await this.getElement(LOGIN_BTN);
        await ele.click();
    } 
    
}