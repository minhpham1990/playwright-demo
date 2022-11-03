import {Page, Locator} from '@playwright/test' 
export default class ElementUtil{
    readonly _page : Page;
    constructor(page: Page){
        this._page = page;
    }
    public async getElement(value: string){
        const locator: Locator = this._page.locator(value)
        if(locator!=null){
            return locator;
        }else throw new Error("Element not found");
    }  
    
    public async waitAndClick(value: string){
        const ele = await this.getElement(value);
        await ele.waitFor({
            state: "visible"
        })
        await ele.click()

    }
}
