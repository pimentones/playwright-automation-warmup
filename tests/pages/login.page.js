import { expect, test } from "@playwright/test";
import { LOGIN_MESSAGES, LOGIN_LABELS } from "../data/login.data.js";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: LOGIN_LABELS.header });
    this.usernameInput = page.getByRole("textbox", {
      name: LOGIN_LABELS.usernameInput,
    });
    this.passwordInput = page.getByRole("textbox", {
      name: LOGIN_LABELS.passwordInput,
    });
    this.loginButton = page.getByRole("button", {
      name: LOGIN_LABELS.loginButton,
    });
    this.loggedinMessage = page.getByText(LOGIN_MESSAGES.success);
    this.logoutButton = page.getByRole("button", {
      name: LOGIN_LABELS.logoutButton,
    });
    this.blockedUserMessage = page.getByText(LOGIN_MESSAGES.blockedUser);
    this.invalidUserMessage = page.getByText(LOGIN_MESSAGES.invalidUser);
    this.wrongPasswordUserMessage = page.getByText(
      LOGIN_MESSAGES.wrongPassword
    );
    this.temporarilyBlockedUserMessage = page.getByText(
      LOGIN_MESSAGES.temporarilyBlocked
    );
  }

  async navigateToLogin() {
    await this.page.goto("/login");
  }

  async fillUsername(userName) {
    await test.step("Fill username: ${userName}", async () => {
      await this.usernameInput.fill(userName);
    });
  }

  async fillPassword(userPassword) {
    await test.step("Fill password", async () => {
      await this.passwordInput.fill(userPassword);
    });
  }

  async login(value) {
    await test.step("Click login button", async () => {
      await this.loginButton.click({ clickCount: value });
    });
  }

  async expectLoggedinMessage() {
    await test.step("Check logged in message is visible", async () => {
      await expect(this.loggedinMessage).toBeVisible();
    });
  }

  async expectLogoutButton() {
    await test.step("Check logout button is visible", async () => {
      await expect(this.logoutButton).toBeVisible();
    });
  }

  async expectBlockedUserMessage() {
    await test.step("Check blocked user message is visible", async () => {
      await expect(this.blockedUserMessage).toBeVisible();
    });
  }

  async expectLoginButton() {
    await test.step("Check login button is visible", async () => {
      await expect(this.loginButton).toBeVisible();
    });
  }

  async expectInvalidUserMessage() {
    await test.step("Check invalid user message is visible", async () => {
      await expect(this.invalidUserMessage).toBeVisible();
    });
  }

  async expectWrongPasswordUserMessage() {
    await test.step("Check wrong password message is visible", async () => {
      await expect(this.wrongPasswordUserMessage).toBeVisible();
    });
  }

  async expectTemporarilyBlockedUserMessage() {
    await test.step("Check temporarily blocked message is visible", async () => {
      await expect(this.temporarilyBlockedUserMessage).toBeVisible();
    });
  }
}
