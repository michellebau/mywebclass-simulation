// @ts-check
const { test, expect } = require('@playwright/test')

test('Check for Words Test', async ({ page }) => {
  // Navigate to the website to test
  await page.goto('http://localhost:3000')

  // Define an array of words to check for
  const wordsToCheckFor = ['engineering', 'technologies', 'teaching', 'software']

  // Loop through the words and check if they are present on the page
  for (const word of wordsToCheckFor) {
    const pageContent = await page.innerText('body')
    expect(pageContent).toContain(word)
  }
})
