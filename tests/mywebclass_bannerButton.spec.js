// @ts-check
const { test, expect } = require('@playwright/test')

test('Check for Button Test', async ({ page }) => {
  // Navigate to the website to test
  await page.goto('http://localhost:3000')

  // Check if the button is present on the page
  const buttonExists = await page.$('button')
  expect(buttonExists).not.toBeNull()
})
