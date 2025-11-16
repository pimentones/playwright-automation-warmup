import { expect, test } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateToUrl(url) {
    await test.step(`Navigate to url: ${url}`, async () => {
      await this.page.goto(url);
    });
  }

  async click(locator, value = 1) {
    await locator.click({ clickCount: value });
  }

  async fill(locator, text) {
    await locator.fill(text);
  }

  async selectOption(locator, value) {
    await locator.selectOption(value);
  }

  async check(locator) {
    await locator.check();
  }

  async expectToBeVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async expectToHaveText(locator, text) {
    await expect(locator).toHaveText(text);
  }
}
