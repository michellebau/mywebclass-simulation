const { test, expect } = require('@playwright/test');

test('Popup Keyboard Navigation Test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.waitForSelector('.modal-content', { visible: true })

  // Select all interactive elements within the popup
  const interactiveElements = await page.$$(
    'a, button'
  );

  // Loop through each element and simulate keyboard navigation
  for (const element of interactiveElements) {
    await element.focus();
    const isActive = await page.evaluate(() => document.activeElement === this);
    expect(isActive).toBeTruthy();
    await page.keyboard.press('Enter');
    const isActivated = await page.evaluate(() => document.activeElement === this);
    expect(isActivated).toBeTruthy();
  }

  // Click on the button that closes the popup
  const closePopupButton = await page.$('#agreeButton, #disagreeButton');
  await closePopupButton.click();
});