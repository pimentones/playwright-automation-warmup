import { test } from "@playwright/test";
import { beforeEach } from "node:test";
import { MenuPage } from "../pages/menu.page";

test.describe("Menu navigation tests", { tag: "@navigation" }, () => {
  test("Navigate to the different website pages", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
      const menu = new MenuPage(page);

      await menu.navigateToUrl("/");
      await menu.clickHome();
      await menu.expectHomePageIntro();
      await menu.clickLogin();
      await menu.expectLoginPageIntro();
      await menu.clickForm();
      await menu.expectFormPageIntro();
      await menu.clickTable();
      await menu.expectTablePageIntro();
      await menu.clickTasks();
      await menu.expectTasksPageIntro();
      await menu.clickStore();
      await menu.expectStorePageIntro();
      await menu.clickAbout();
      await menu.expectAboutPageIntro();
    });
  });
});
