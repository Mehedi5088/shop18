console.log("Base page loaded");
import { Browser, Builder, By } from 'selenium-webdriver';

class BasePage {

    constructor() {
        this.driver = new Builder().forBrowser(Browser.CHROME).build();
        this.registerLink = By.xpath("//a[@href='/register']");
        this.gender = By.id("gender-male");
        this.firstName = By.id("FirstName");
        this.lastName = By.id("LastName");
        this.email = By.id("Email");
        this.password = By.id("Password");
        this.confirmPassword = By.id("ConfirmPassword");
        this.registeredBtn = By.name("register-button");

    }
    // browser open from here
    async browserOpen(url) {
        await this.driver.get(url);
       await this.driver.manage().window().maximize();
    }
    async clickRegisterLink() {
        await this.driver.findElement(this.registerLink).click();
    }
    async clickMaleGender() {
        await this.driver.findElement(this.gender).click();
    }

    async enterFirstName() {
        await this.driver.findElement(this.firstName).sendKeys("Mehedi");
    }

    async enterLastName(lastName) {
        await this.driver.findElement(this.lastName).sendKeys(lastName);
    }
    async enterEmail(email) {
        await this.driver.findElement(this.email).sendKeys(email);
    }
    async enterPassword(password) {
        await this.driver.findElement(this.password).sendKeys(password);
    }
    async enterConfirmPassword(confirmPassword) {
        await this.driver.findElement(this.confirmPassword).sendKeys(confirmPassword);
    }
    async clickRegisterButton() {
        await this.driver.findElement(this.registeredBtn).click();
    }

// browser close from here
    async browserClose() {
        await this.driver.quit();
    }

}

const pages = new BasePage();
await pages.browserOpen("https://demowebshop.tricentis.com/");
await pages.clickRegisterLink();
await pages.clickMaleGender();
await pages.enterFirstName();
await pages.enterLastName("Hasan");
await pages.enterEmail("mehedi220802@gmail.com");
await pages.enterPassword("123456");
await pages.enterConfirmPassword("123456");
await pages.clickRegisterButton();  
await pages.browserClose();

// aysnc vs sync /home/mehedi/Automation/Selenium all/batch18/shopWithSelenium/package.json
// /home/mehedi/Automation/Selenium all/batch19/shopWithSelenium//package.json 

// {/* <a href="/register" class="ico-register">Register</a> */}
//tagname[@attribute='value']