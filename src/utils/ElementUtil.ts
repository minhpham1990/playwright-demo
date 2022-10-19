import {Page, Locator} from '@playwright/test' 
export class ElementUtil{
    readonly _page : Page;
    constructor(page: Page){
        this._page = page;
    }
    public getElement(value: string){
        const locator: Locator = this._page.locator(value)
        if(locator!=null){
            return locator;
        }else throw new Error("Element not found");
    }   
}
