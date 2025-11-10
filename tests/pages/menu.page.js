import { expect } from "@playwright/test";
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
    await this.homeLink.click();
  }

  async navigateToLogin() {
    await this.loginLink.click();
  }

  async navigateToForm() {
    await this.formLink.click();
  }

  async navigateToTable() {
    await this.tableLink.click();
  }

  async navigateToTasks() {
    await this.tasksLink.click();
  }

  async navigateToStore() {
    await this.storeLink.click();
  }

  async navigateToAbout() {
    await this.aboutLink.click();
  }

  async expectHomePageIntro() {
    await expect(this.homePageElement).toBeVisible();
  }

  async expectLoginPageIntro() {
    await expect(this.loginPageElement).toBeVisible();
  }

  async expectFormPageIntro() {
    await expect(this.formPageElement).toBeVisible();
  }

  async expectTablePageIntro() {
    await expect(this.tablePageElement).toBeVisible();
  }

  async expectTasksPageIntro() {
    await expect(this.tasksPageElement).toBeVisible();
  }

  async expectStorePageIntro() {
    await expect(this.storePageElement).toBeVisible();
  }

  async expectAboutPageIntro() {
    await expect(this.storePageElement).toBeVisible();
  }
}
