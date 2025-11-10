import { expect } from "@playwright/test";
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
    await this.usernameInput.fill(userName);
  }

  async fillPassword(userPassword) {
    await this.passwordInput.fill(userPassword);
  }

  async login(value) {
    await this.loginButton.click({ clickCount: value });
  }

  async expectLoggedinMessage() {
    await expect(this.loggedinMessage).toBeVisible();
  }

  async expectLogoutButton() {
    await expect(this.logoutButton).toBeVisible();
  }

  async expectBlockedUserMessage() {
    await expect(this.blockedUserMessage).toBeVisible();
  }

  async expectLoginButton() {
    await expect(this.loginButton).toBeVisible();
  }

  async expectInvalidUserMessage() {
    await expect(this.invalidUserMessage).toBeVisible();
  }

  async expectWrongPasswordUserMessage() {
    await expect(this.wrongPasswordUserMessage).toBeVisible();
  }

  async expectTemporarilyBlockedUserMessage() {
    await expect(this.temporarilyBlockedUserMessage).toBeVisible();
  }
}
