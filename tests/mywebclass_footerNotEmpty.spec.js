const { test, expect } = require('@playwright/test')

test('Footer Test', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Check if the footer has content
  const footerContent = await page.$eval('footer', (el) => el.textContent.trim())
  expect(footerContent).not.toBe('')
})