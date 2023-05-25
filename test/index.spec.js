const {Builder, By, Key } = require('selenium-webdriver');
require('chromedriver');
const url = 'http://localhost:3000'

describe('Selenium', () => {
    it(' 30, 35 input 12252.211349000194', async () => {
        let driver = new Builder()
        .forBrowser('chrome').build();
        driver.get(url);
        driver.findElement(By.id('radius')).sendKeys('30');
        driver.findElement(By.id('height')).sendKeys('35');
        driver.findElement(By.id('calcButton')).click();
        let actual = await driver.findElement(By.id('surface')).getAttribute('value');
        expect(actual).toBeCloseTo(12252.2, 0.9);
        await driver.close();        
    });
});


