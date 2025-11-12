import { test } from "@playwright/test";
import { BasePage } from "./base.page";
import {
  MENU_LINKS,
  PAGE_ELEMENT_TEXTS,
  PAGE_INTRO_TEXTS,
} from "../data/menu.data";

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);

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

  async clickHome() {
    await test.step("Navigate to home page", async () => {
      await this.click(this.homeLink);
    });
  }

  async clickLogin() {
    await test.step("Navigate to login page", async () => {
      await this.click(this.loginLink);
    });
  }

  async clickForm() {
    await test.step("Navigate to form page", async () => {
      await this.click(this.formLink);
    });
  }

  async clickTable() {
    await test.step("Navigate to table page", async () => {
      await this.click(this.tableLink);
    });
  }

  async clickTasks() {
    await test.step("Navigate to tasks page", async () => {
      await this.click(this.tasksLink);
    });
  }

  async clickStore() {
    await test.step("Navigate to store page", async () => {
      await this.click(this.storeLink);
    });
  }

  async clickAbout() {
    await test.step("Navigate to about page", async () => {
      await this.click(this.aboutLink);
    });
  }

  async expectHomePageIntro() {
    await test.step("Check home page element is visible", async () => {
      await this.expectToBeVisible(this.homePageElement);
    });
  }

  async expectLoginPageIntro() {
    await test.step("Check login page element is visible", async () => {
      await this.expectToBeVisible(this.loginPageElement);
    });
  }

  async expectFormPageIntro() {
    await test.step("Check form page element is visible", async () => {
      await this.expectToBeVisible(this.formPageElement);
    });
  }

  async expectTablePageIntro() {
    await test.step("Check table page element is visible", async () => {
      await this.expectToBeVisible(this.tablePageElement);
    });
  }

  async expectTasksPageIntro() {
    await test.step("Check tasks page element is visible", async () => {
      await this.expectToBeVisible(this.tasksPageElement);
    });
  }

  async expectStorePageIntro() {
    await test.step("Check store page element is visible", async () => {
      await this.expectToBeVisible(this.storePageElement);
    });
  }

  async expectAboutPageIntro() {
    await test.step("Check about page element is visible", async () => {
      await this.expectToBeVisible(this.aboutPageElement);
    });
  }
}
