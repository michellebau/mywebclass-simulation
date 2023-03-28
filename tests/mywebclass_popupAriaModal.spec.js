const { test, expect } = require('@playwright/test')

test('Popup modal has aria modal attribute set to true', async ({ page }) => {
  // Navigate to your website
  await page.goto('http://localhost:3000')

  // Wait for the popup to appear
  const cookiePopup = await page.waitForSelector('.modal')

  // Check if the cookie popup has aria-modal set to true
  const ariaModal = await cookiePopup.getAttribute('aria-modal');
  expect(ariaModal).toBe('true');
})