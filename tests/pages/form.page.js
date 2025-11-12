import { test } from "@playwright/test";
import { BasePage } from "./base.page";
import { ERROR_MESSAGES, FORM_LABELS, FORM_MESSAGES } from "../data/form.data";

export class FormPage extends BasePage {
  constructor(page) {
    super(page);

    // Form elements
    this.header = page.getByRole("heading", { name: FORM_LABELS.header });
    this.nameInput = page.getByRole("textbox", { name: FORM_LABELS.nameInput });
    this.emailInput = page.getByRole("textbox", {
      name: FORM_LABELS.emailInput,
    });
    this.passwordInput = page.getByRole("textbox", {
      name: FORM_LABELS.passwordInput,
    });
    this.countrySelect = page.getByLabel(FORM_LABELS.countrySelect);
    this.genderCheck = (value) =>
      page.getByRole("radio", { name: value, exact: true });
    this.hobbyCheck = (value) => page.getByRole("checkbox", { name: value });
    this.sendButton = page.getByRole("button", {
      name: FORM_LABELS.sendButton,
    });

    // Form messages
    this.successMessageTitle = page.getByText(FORM_MESSAGES.successTitle);
    this.successMessageBody = page.getByText(FORM_MESSAGES.successBody);
    this.nameRequiredMessage = page.getByText(ERROR_MESSAGES.name);
    this.emailRequiredMessage = page.getByText(ERROR_MESSAGES.email);
    this.passwordRequiredMessage = page.getByText(ERROR_MESSAGES.password);
    this.countryRequiredMessage = page.getByText(ERROR_MESSAGES.country);
    this.genderRequiredMessage = page.getByText(ERROR_MESSAGES.gender);
  }

  async navigateToForm() {
    await test.step("Navigate to login page", async () => {
      await this.navigateToUrl("/form");
    });
  }

  async fillName(userName) {
    await test.step(`Fill username: ${userName}`, async () => {
      await this.fill(this.nameInput, userName);
    });
  }

  async fillEmail(userEmail) {
    await test.step(`Fill email: ${userEmail}`, async () => {
      await this.fill(this.emailInput, userEmail);
    });
  }

  async fillPassword(userPassword) {
    await test.step("Fill password", async () => {
      await this.fill(this.passwordInput, userPassword);
    });
  }

  async selectCountry(userCountry) {
    await test.step(`Select country: ${userCountry}`, async () => {
      await this.selectOption(this.countrySelect, userCountry);
    });
  }

  async selectGender(userGender) {
    await test.step(`Select gender: ${userGender}`, async () => {
      await this.check(this.genderCheck(userGender));
    });
  }

  async selectHobby(userHobbies) {
    await test.step(`Select hobbies: ${userHobbies.join(", ")}`, async () => {
      if (userHobbies.length > 0) {
        for (const hobby of userHobbies) {
          await this.check(this.hobbyCheck(hobby));
        }
      }
    });
  }

  async clickSend(value) {
    await test.step("Submit form", async () => {
      await this.click(this.sendButton, value);
    });
  }

  async expectSuccessMessage() {
    await test.step("Check form submitted success message is visible", async () => {
      await this.expectToBeVisible(this.successMessageTitle);
      await this.expectToBeVisible(this.successMessageBody);
    });
  }

  async expectRequiredFieldsMessage() {
    await test.step("Check required fields message is visible", async () => {
      await this.expectToBeVisible(this.nameRequiredMessage);
      await this.expectToBeVisible(this.emailRequiredMessage);
      await this.expectToBeVisible(this.passwordRequiredMessage);
      await this.expectToBeVisible(this.countryRequiredMessage);
      await this.expectToBeVisible(this.genderRequiredMessage);
    });
  }
}
