import test, { expect } from "@playwright/test";
import dotenv from "dotenv";
import { registerUsers, messages } from "./data/form.js"; //mistake1: this a default import. learn how to properly use named and default imports

dotenv.config();

test.describe("Registration tests", { tag: "@registration" }, () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Navigate to form page", async () => {
      await page.goto(process.env.BASE_URL + "form");
    });
  });

  test("Successfull user registration", async ({ page }) => {
    for (const user in registerUsers) {
      // in the first iteration navigates twice for the URL under test, how to avoid this extra step?
      await page.goto(process.env.BASE_URL + "form");
      //mistake2: test.step doesn't take page as a parameter
      await test.step(`Register ${user} user`, async ({}) => {
        const data = registerUsers[user];

        await page.getByRole("textbox", { name: "Name *" }).click();
        await page.getByRole("textbox", { name: "Name *" }).fill(data.name);

        await page.getByRole("textbox", { name: "Email *" }).click();
        await page.getByRole("textbox", { name: "Email *" }).fill(data.email);
        await page.getByRole("textbox", { name: "Password *" }).click();
        await page
          .getByRole("textbox", { name: "Password *" })
          .fill(data.password);
        await page.getByLabel("Country *").selectOption(data.country);
        await page
          .getByRole("radio", { name: data.gender, exact: true })
          .check();

        if (data.hobbies && data.hobbies.length > 0) {
          for (const hobby of data.hobbies) {
            await page.getByRole("checkbox", { name: hobby }).check();
          }
        }

        await page.getByRole("button", { name: "Send" }).click();
        await expect(
          page.getByText(messages.success.messageTitle)
        ).toBeVisible();
        await expect(
          page.getByText(messages.success.messageBody)
        ).toBeVisible();
      });
    }
  });

  test("Show required fields error messages", async ({ page }) => {
    await test.step(`Submit empty form and see required fields error messages`, async ({}) => {
      await page.getByRole("button", { name: "Send" }).click();
      await expect(
        page.getByText(messages.required.nameRequired)
      ).toBeVisible();
      await expect(
        page.getByText(messages.required.passwordRequired)
      ).toBeVisible();
      await expect(
        page.getByText(messages.required.emailRequired)
      ).toBeVisible();
      await expect(
        page.getByText(messages.required.countryRequired)
      ).toBeVisible();
      await expect(
        page.getByText(messages.required.genderRequired)
      ).toBeVisible();
    });
  });
});
