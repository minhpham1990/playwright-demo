import {Page, Locator} from '@playwright/test' 

export default class HomePage {
    private readonly page : Page;

    constructor(page:Page) {
        this.page = page 
    }
    
    async open(){
        await this.page.goto('/inventory.html')
    }

    
}