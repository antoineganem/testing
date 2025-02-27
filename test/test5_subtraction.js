// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('010101  - 010101 = Error', function() {
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
  it('010101  - 010101 = Error', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 1024, height: 518 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).click()
    {
      const element = await driver.findElement(By.id("num1"))
      await driver.actions({ bridge: true}).doubleClick(element).perform()
    }
    await driver.findElement(By.id("num1")).sendKeys("010101  + 010101 = Error")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("010101")
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("010101  ")
    await driver.findElement(By.id("operator")).click()
    await driver.findElement(By.css("button:nth-child(2)")).click()
  })
})
