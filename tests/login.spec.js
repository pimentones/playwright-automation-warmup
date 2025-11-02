import test, { expect } from "@playwright/test";
import { beforeEach } from "node:test";
import users from "./data/login.js";

test.describe("Authentication tests", { tag: "@autehntication" }, () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Navigate to login page", async () => {
      await page.goto("https://playground-drab-six.vercel.app/login");
    });
  });

  test("Successful login", async ({ page }) => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.validUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.validUser.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("User successfully logged in!")).toBeVisible();
  });

  // Bruno's code for the same test
  // import test, { expect } from "@playwright/test";
  // test('Login sucessful', async ({page})=>{

  //     await page.goto('https://playground-drab-six.vercel.app/login');
  //     await page.getByRole('textbox', {name: 'Type your username'}).fill('test');
  //     await page.getByRole('textbox', {name: 'Type your password'}).fill('password123');
  //     await page.getByRole('button', { name: 'Login' }).click();

  //     await expect(page.getByText('User successfully logged in!')).toBeVisible();
  // })

  test("Blocked account", async ({ page }) => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.blcokedUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.blcokedUser.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("User blocked!")).toBeVisible();
  });

  test("Invalid user", async ({ page }) => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.invalidUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.invalidUser.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("User not found!")).toBeVisible();
  });

  test("Wrong password", async ({ page }) => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.wrongPasswordUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.wrongPasswordUser.password);
    await page.getByRole("button", { name: "Login" }).click();
    await expect(
      page.getByText("Incorrect username or password!")
    ).toBeVisible();
  });

  test("Wrong password 3 times ", async ({ page }) => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.wrongPasswordUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.wrongPasswordUser.password);
    await test.step("Attempting login with invalid credentials 3 times until blocking the account", async () => {
      await page.getByRole("button", { name: "Login" }).click();
      await page.getByRole("button", { name: "Login" }).click();
      await page.getByRole("button", { name: "Login" }).click();
      await expect(page.getByText("User temporarily blocked!")).toBeVisible();
    });
  });
});
