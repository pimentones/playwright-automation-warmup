import { test } from "@playwright/test";
import { BasePage } from "./base.page";
import { LOGIN_MESSAGES, LOGIN_LABELS } from "../data/login.data";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);

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
    await test.step("Navigate to login page", async () => {
      await this.navigateToUrl("/login");
    });
  }

  async fillUsername(userName) {
    await test.step(`Fill username: ${userName}`, async () => {
      await this.fill(this.usernameInput, userName);
    });
  }

  async fillPassword(userPassword) {
    await test.step("Fill password", async () => {
      await this.fill(this.passwordInput, userPassword);
    });
  }

  async login(value) {
    await test.step("Click login button", async () => {
      await this.click(this.loginButton, value);
    });
  }

  async expectLoggedinMessage() {
    await test.step("Check logged in message is visible", async () => {
      await this.expectToBeVisible(this.loggedinMessage);
    });
  }

  async expectLogoutButton() {
    await test.step("Check logout button is visible", async () => {
      await this.expectToBeVisible(this.logoutButton);
    });
  }

  async expectBlockedUserMessage() {
    await test.step("Check blocked user message is visible", async () => {
      await this.expectToBeVisible(this.blockedUserMessage);
    });
  }

  async expectLoginButton() {
    await test.step("Check login button is visible", async () => {
      await this.expectToBeVisible(this.loginButton);
    });
  }

  async expectInvalidUserMessage() {
    await test.step("Check invalid user message is visible", async () => {
      await this.expectToBeVisible(this.invalidUserMessage);
    });
  }

  async expectWrongPasswordUserMessage() {
    await test.step("Check wrong password message is visible", async () => {
      await this.expectToBeVisible(this.wrongPasswordUserMessage);
    });
  }

  async expectTemporarilyBlockedUserMessage() {
    await test.step("Check temporarily blocked message is visible", async () => {
      await this.expectToBeVisible(this.temporarilyBlockedUserMessage);
    });
  }
}
