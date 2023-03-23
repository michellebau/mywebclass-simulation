const { test, expect } = require('@playwright/test');

test('Keyboard Navigation Test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const interactiveElements = await page.$$(
    'a, button, input[type="checkbox"], input[type="radio"], select, textarea'
  );
  for (const element of interactiveElements) {
    await element.focus();
    const isActive = await page.evaluate(() => document.activeElement === this);
    expect(isActive).toBeTruthy();
    await page.keyboard.press('Enter');
    const isActivated = await page.evaluate(() => document.activeElement === this);
    expect(isActivated).toBeTruthy();
  }
});