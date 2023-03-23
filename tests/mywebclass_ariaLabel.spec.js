const { test, expect } = require('@playwright/test');

test('ARIA Label Attribute Test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const buttons = await page.$$('[role="button"]');
  for (const button of buttons) {
    const ariaLabel = await button.getAttribute('aria-label');
    expect(ariaLabel).toBeTruthy();
  }
});