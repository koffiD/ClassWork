import{Builder,By,Capabilities,WebDriver} from "selenium-webdriver"

const chromedriver= require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("practicing CSS selectors", () => {
    beforeEach(async () => {
        await driver.get("https://www.amazon.com")
    });

    afterAll(async () => {
        await driver.quit() 
    });

    const searchBar : By = By.id("twotabsearchtextbox");
    const results: By = By.css('.s-main-slot')

    test("searching for item on amazon", async () => {
        await driver.findElement(searchBar).sendKeys("phones\n")
        let resultsTest = await driver.findElement(results).getText();
        expect(resultsTest).toContain("phones")
    })
})