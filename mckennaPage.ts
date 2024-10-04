import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";
const fs = require("fs")

export class McKennaPage extends BasePage { 
    //locators
    newsletter:By = By.xpath('//span[@class="form-title"]')
    name:By = By.xpath('//input[@id="inputName"]')
    email:By = By.xpath('//input[@id="inputEmail"]')
    country:By = By.xpath('//select[@id="dropdownCountry"]')
    checkBox:By = By.xpath('(//input[@id="check"])[1]')
    submit:By = By.xpath('//button[@class="btn"]')
    //second test
    works:By = By.xpath('(//a[text()="Works"])[1]')
    filmTv:By = By.xpath('(//span[text()="Film & TV"])[1]')
    other:By = By.xpath('(//span[text()="Other"])[1]')
    writtenWorks: By = By.xpath('(//span[text()="Written Works"])[1]')
    //third test
    upcoming:By = By.xpath('(//a[text()="Upcoming"])[1]')
    movies:By = By.xpath('(//a[@class = "nav-link"])[2]') 
    novellas:By = By.xpath('(//a[@class = "scroller active"][1])')
    //fourth test
    theAuthor:By = By.xpath('(//a[text()="The Author"])[1]')
    pressBiography:By = By.xpath('(//a[text()="Press Biography"])[1]')
    photo:By = By.xpath('(//a[text()="Photo Gallery"])[1]')
    filmTvAppearances:By = By.xpath('(//a[text()="Film/TV Appearances"])[1]')
    awards:By = By.xpath('(//a[text()="Awards"])[1]')
    about:By = By.xpath('(//a[text()="About the Author"])[1]')
    //fifth test
    miscellaneous:By = By.xpath('(//a[text()="Miscellaneous"])[1]')
    links:By = By.xpath('(//a[text()="Links"])[1]')
    credits:By = By.xpath('(//a[text()="Credits"])[1]')







    //constructor
    constructor() {
        super({url:"https://stephenking.com/"});
    };
    
    //methods
    async myName(text: string) {
        return this.setInput(this.name, `${text}`);
    };
    
    async myEmail(textEmail: string) {
        return this.setInput(this.email, `${textEmail}`);

    }

};


   