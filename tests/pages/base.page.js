import { expect, test } from "@playwright/test";

export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   * @param {string} url - The URL path to navigate to
   * @returns {Promise<void>}
   */
  async navigateToUrl(url) {
    await test.step(`Navigate to url: ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  /**
   * Click on an element
   * @param {import('@playwright/test').Locator} locator - The element to click
   * @param {number} [clickCount=1] - Number of times to click
   * @returns {Promise<void>}
   */
  async click(locator, clickCount = 1) {
    await locator.click({ clickCount });
  }

  /**
   * Fill a text input field
   * @param {string} text - The text to fill
   * @param {import('@playwright/test').Locator} locator - The input locator
   * @returns {Promise<void>}
   */
  async fill(text, locator) {
    await locator.fill(text);
  }

  /**
   * Select an option from a dropdown
   * @param {string} value - The option value to select
   * @param {import('@playwright/test').Locator} locator - The select locator
   * @returns {Promise<void>}
   */
  async selectOption(value, locator) {
    await locator.selectOption(value);
  }

  /**
   * Check a checkbox or radio button
   * @param {import('@playwright/test').Locator} locator - The checkbox/radio locator
   * @returns {Promise<void>}
   */
  async check(locator) {
    await locator.check();
  }

  /**
   * Assert that an element is visible
   * @param {import('@playwright/test').Locator} locator - The element to check
   * @returns {Promise<void>}
   */
  async expectToBeVisible(locator) {
    await expect(locator).toBeVisible();
  }

  /**
   * Assert that an element has specific text
   * @param {import('@playwright/test').Locator} locator - The element to check
   * @param {string} text - The expected text
   * @returns {Promise<void>}
   */
  async expectToHaveText(locator, text) {
    await expect(locator).toHaveText(text);
  }
}
