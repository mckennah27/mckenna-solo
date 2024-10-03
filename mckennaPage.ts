import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class McKennaPage extends BasePage { 
    //locators
    newsletter: By = By.xpath('//span[@class="form-title"]')
    name: By = By.xpath$x('//input[@id="inputName"]')
    email: By = By.xpath('//input[@id="inputEmail"]')
    country: By = By.xpath('//select[@id="dropdownCountry"]')
    check box:By = By.xpath('(//input[@id="check"])[1]')
    submit:By = By.xpath('//button[@class="btn"]')



    //constructor
    constructor() {
        super({url:"https://stephenking.com/"});
    };
};


    //methods



}