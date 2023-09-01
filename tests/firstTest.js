const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.cz.nl/');

    await driver.findElement(By.id("CybotCookiebotDialogBodyButtonDecline")).click();

    await driver.findElement(By.css(".shared-header__nav > form[role='search']  input#shared-header-search")).sendKeys("med",Key.ENTER);

    await driver.sleep(5000);
    
  } finally {
    await driver.quit();
  }
  
})();
