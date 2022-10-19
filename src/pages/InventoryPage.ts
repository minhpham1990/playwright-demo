import {Page, Locator} from '@playwright/test' 

export default class InventoryPage {
    readonly _page : Page;

    constructor(page:Page) {
        this._page = page 
    }
    
    async open(){
        await this._page.goto('/inventory.html')
    }

    
}