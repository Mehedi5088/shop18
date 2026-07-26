import { Browser, Builder } from 'selenium-webdriver';

class BasePage {

    constructor() {
        this.driver = new Builder().forBrowser(Browser.CHROME).build();
    }

    async browserOpen(url) {
        await this.driver.get(url);
    }

    async browserClose() {
        await this.driver.quit();
    }


}

const pages = new BasePage();
await pages.browserOpen("https://demowebshop.tricentis.com/");
await pages.browserClose();

// aysnc vs sync