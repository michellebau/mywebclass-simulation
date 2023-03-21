const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:3000');

  const privacyPolicyLink = await page.$('a[href="privacy.html"]');
  if (privacyPolicyLink) {
    console.log('Privacy policy found!');
  } else {
    console.log('Privacy policy not found!');
  }

  await browser.close();
})();
