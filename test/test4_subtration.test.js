// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

const options = new chrome.Options();
options.addArguments('--user-data-dir=/tmp/chrome-profile'); // Set a unique profile path


describe('01 - 01 = Error', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('01 - 01 = Error', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 1024, height: 518 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("01")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("01")
    await driver.findElement(By.css(".wrapper")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
  })
})
