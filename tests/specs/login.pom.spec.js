import { test } from "@playwright/test";
import dotenv from "dotenv";
import { LOGIN_USERS } from "../data/login.data.js";
import { LoginPage } from "../pages/login.page.js";

dotenv.config();

test.describe("Authentication tests", { tag: "@authentication" }, () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Navigate to login page", async () => {
      await page.goto(process.env.BASE_URL + "/login");
    });
  });

  test("Successful login", async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto(process.env.BASE_URL + "/login");
    await login.fillUsername(LOGIN_USERS.validUser.username);
    await login.fillPassword(LOGIN_USERS.validUser.password);
    await login.login();
    await login.expectLoggedinMessage();
    await login.expectLogoutButton();
  });

  test("Blocked account", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillUsername(LOGIN_USERS.blockedUser.username);
    await login.fillPassword(LOGIN_USERS.blockedUser.password);
    await login.login();
    await login.expectBlockedUserMessage();
    await login.expectLoginButton();
  });

  test("Invalid user", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillUsername(LOGIN_USERS.invalidUser.username);
    await login.fillPassword(LOGIN_USERS.invalidUser.password);
    await login.login();
    await login.expectInvalidUserMessage();
    await login.expectLoginButton();
  });

  test("Wrong password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillUsername(LOGIN_USERS.wrongPasswordUser.username);
    await login.fillPassword(LOGIN_USERS.wrongPasswordUser.password);
    await login.login();
    await login.expectWrongPasswordUserMessage();
    await login.expectLoginButton();
  });

  test("Wrong password 3 times ", async ({ page }) => {
    const login = new LoginPage(page);
    await login.fillUsername(LOGIN_USERS.wrongPasswordUser.username);
    await login.fillPassword(LOGIN_USERS.wrongPasswordUser.password);
    await login.login(3);
    await login.expectTemporarilyBlockedUserMessage();
    await login.expectLoginButton();
  });
});
