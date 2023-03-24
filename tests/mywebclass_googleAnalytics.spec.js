const { test, expect } = require('@playwright/test')

test('Check for Google Analytics', async ({ page }) => {
  await page.goto('http://localhost:3000') // Replace with your website URL

  const hasGoogleAnalytics = await page.evaluate(() => {
    return typeof window.ga === 'function'
  })

  expect(hasGoogleAnalytics).toBeTruthy()
})
