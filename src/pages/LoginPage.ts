import {Page, Locator} from '@playwright/test' 


const USERNAME_TXB = '#user-name'
const PASS_TXB = '#password'

export default class LoginPage {
    readonly page : Page;

    constructor(page:Page) {
        this.page = page   
    }

    public get usernameElement(){
        const usernameTxb = this.page.locator(USERNAME_TXB)
        if(usernameTxb!=null){
            return usernameTxb;
        }else throw new Error("Element not found")
    }

    public get passwordElement(){
        const passwordTxb = this.page.locator(PASS_TXB)
        if(passwordTxb!=null){
            return passwordTxb;
        }else throw new Error("Element not found")
    }

    async open(){
        await this.page.goto('/')
    }

    async inputNameTextbox(value: string){
        await this.usernameElement.fill(value)
    }

    async inputPassTextbox(value: string){
        await this.passwordElement.fill(value)
    } 
      
}