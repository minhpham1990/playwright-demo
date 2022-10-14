import {Page, Locator} from '@playwright/test' 
export default class LoginPage {
    readonly page : Page;
    readonly NAME_TXB: Locator;
    readonly PASS_TXB: Locator;
    constructor(page:Page) {
        this.page = page
        this.NAME_TXB = page.locator('#user-name')
        this.PASS_TXB = page.locator('#password')       
    }

    async open(){
        await this.page.goto('/')
    }

    async inputNameTextbox(value: string){
        await this.NAME_TXB.fill(value)
    }

    async inputPassTextbox(value: string){
        await this.PASS_TXB.fill(value)
    } 
      
}