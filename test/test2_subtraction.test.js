// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert')

options.addArguments('--headless');

describe('0 - 0', function() {
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
  it('0 - 0', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 1366, height: 702 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("0")
    await driver.findElement(By.css(".input-group:nth-child(4) > label")).click()
    await driver.findElement(By.id("num2")).sendKeys("0")
    await driver.findElement(By.css(".wrapper")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
  })
})
