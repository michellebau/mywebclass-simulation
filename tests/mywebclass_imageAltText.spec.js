const { test, expect } = require('@playwright/test')

test('Image Alt Attribute Test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  const images = await page.$$('img')
  for (const image of images) {
    const altText = await image.getAttribute('alt')
    expect(altText).not.toBeFalsy()
  }
})
