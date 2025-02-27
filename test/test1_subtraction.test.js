const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('-1 - -1 = 0', function() {
  this.timeout(30000);
  let driver;
  let vars;

  beforeEach(async function() {
    const userDataDir = `/tmp/chrome-profile-${Date.now()}`;  // Unique directory for each test
    const options = new chrome.Options().addArguments(`--user-data-dir=${userDataDir}`);
    
    try {
      driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
      vars = {};
    } catch (error) {
      console.error("Failed to initialize WebDriver:", error);
      throw error;
    }
  });

  afterEach(async function() {
    if (driver) {  // Prevent "undefined" error
      await driver.quit();
    }
  });

  it('-1 - -1 = 0', async function() {
    await driver.get("http://localhost:8000/");
    await driver.manage().window().setRect({ width: 1366, height: 702 });
    
    await driver.findElement(By.id("num1")).sendKeys("-1");
    await driver.findElement(By.id("num2")).sendKeys("-1");
    await driver.findElement(By.css("button:nth-child(2)")).click();

    // You might want to add an assertion here
  });
});

