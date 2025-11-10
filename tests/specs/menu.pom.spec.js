import test from "@playwright/test";
import dotenv from "dotenv";
import { beforeEach } from "node:test";
import { MenuPage } from "../pages/menu.page.js";

dotenv.config();

test.describe("Menu navigation tests", { tag: "@navigation" }, () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Navigate to login page", async () => {
      await page.goto(process.env.BASE_URL + "/login");
      const login = new MenuPage(page);
    });
  });

  test("Navigate to the different website pages", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
      const menu = new MenuPage(page);
      await menu.navigateToHome();
      await menu.expectHomePageIntro();
      await menu.navigateToLogin();
      await menu.expectLoginPageIntro();
      await menu.navigateToForm();
      await menu.expectFormPageIntro();
      await menu.navigateToTable();
      await menu.expectTablePageIntro();
      await menu.navigateToTasks();
      await menu.expectTasksPageIntro();
      await menu.navigateToStore();
      await menu.expectStorePageIntro();
      await menu.navigateToAbout();
      await menu.expectAboutPageIntro();
    });
  });
});
