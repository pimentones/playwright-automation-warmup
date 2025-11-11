import { expect, test } from "@playwright/test";
import {
  MENU_LINKS,
  PAGE_ELEMENT_TEXTS,
  PAGE_INTRO_TEXTS,
} from "../data/menu.data";

export class MenuPage {
  constructor(page) {
    this.page = page;
    this.homeLink = page.getByRole("link", { name: MENU_LINKS.home });
    this.loginLink = page.getByRole("link", { name: MENU_LINKS.login });
    this.formLink = page.getByRole("link", { name: MENU_LINKS.form });
    this.tableLink = page.getByRole("link", { name: MENU_LINKS.table });
    this.tasksLink = page.getByRole("link", { name: MENU_LINKS.tasks });
    this.storeLink = page.getByRole("link", { name: MENU_LINKS.store });
    this.aboutLink = page.getByRole("link", { name: MENU_LINKS.about });

    this.homePageElement = page.getByText(PAGE_ELEMENT_TEXTS.home);
    this.loginPageElement = page.getByText(PAGE_ELEMENT_TEXTS.login);
    this.formPageElement = page.getByText(PAGE_ELEMENT_TEXTS.form);
    this.tablePageElement = page.getByText(PAGE_ELEMENT_TEXTS.table);
    this.tasksPageElement = page.getByText(PAGE_ELEMENT_TEXTS.tasks);
    this.storePageElement = page.getByText(PAGE_ELEMENT_TEXTS.store);
    this.aboutPageElement = page.getByRole("heading", {
      name: PAGE_ELEMENT_TEXTS.about,
    });
  }

  async navigateToHome() {
    await test.step("Navigate to home page", async () => {
      await this.homeLink.click();
    });
  }

  async navigateToLogin() {
    await test.step("Navigate to login page", async () => {
      await this.loginLink.click();
    });
  }

  async navigateToForm() {
    await test.step("Navigate to form page", async () => {
      await this.formLink.click();
    });
  }

  async navigateToTable() {
    await test.step("Navigate to table page", async () => {
      await this.tableLink.click();
    });
  }

  async navigateToTasks() {
    await test.step("Navigate to tasks page", async () => {
      await this.tasksLink.click();
    });
  }

  async navigateToStore() {
    await test.step("Navigate to store page", async () => {
      await this.storeLink.click();
    });
  }

  async navigateToAbout() {
    await test.step("Navigate to about page", async () => {
      await this.aboutLink.click();
    });
  }

  async expectHomePageIntro() {
    await test.step("Check home page intro is visible", async () => {
      await expect(this.homePageElement).toBeVisible();
    });
  }

  async expectLoginPageIntro() {
    await test.step("Check login page intro is visible", async () => {
      await expect(this.loginPageElement).toBeVisible();
    });
  }

  async expectFormPageIntro() {
    await test.step("Check form page intro is visible", async () => {
      await expect(this.formPageElement).toBeVisible();
    });
  }

  async expectTablePageIntro() {
    await test.step("Check table page intro is visible", async () => {
      await expect(this.tablePageElement).toBeVisible();
    });
  }

  async expectTasksPageIntro() {
    await test.step("Check tasks page intro is visible", async () => {
      await expect(this.tasksPageElement).toBeVisible();
    });
  }

  async expectStorePageIntro() {
    await test.step("Check store page intro is visible", async () => {
      await expect(this.storePageElement).toBeVisible();
    });
  }

  async expectAboutPageIntro() {
    await test.step("Check about page intro is visible", async () => {
      await expect(this.storePageElement).toBeVisible();
    });
  }
}
