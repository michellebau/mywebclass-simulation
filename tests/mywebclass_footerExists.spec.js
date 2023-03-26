const { test, expect } = require('@playwright/test')

test('Footer Test', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Check if the footer exists
  const footerExists = await page.$('footer')
  expect(footerExists).not.toBeNull()
})