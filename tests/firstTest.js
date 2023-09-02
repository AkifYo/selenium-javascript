const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require ('assert');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.cz.nl/');

    await driver.findElement(By.id("CybotCookiebotDialogBodyButtonDecline")).click();

    await driver.sleep(2000);

    await driver.findElement(By.css(".shared-header__nav > form[role='search']  input#shared-header-search")).sendKeys("med",Key.ENTER);

    //assert
    let searchResult= await driver.findElement(By.css("h1"))

    console.log(searchResult.getText());
    

    await driver.sleep(2000);

    let srcBxIsDisplayed=searchResult.isDisplayed;

    assert.strictEqual(searchResult.getText(),"Zoekresultaten");

    await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
  
})();
