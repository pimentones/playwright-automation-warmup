import { expect, test } from "@playwright/test";
import { ERROR_MESSAGES, FORM_LABELS, FORM_MESSAGES } from "../data/form.data";

export class FormPage {
  constructor(page) {
    this.page = page;

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
    await this.page.goto("/form");
  }

  async fillName(userName) {
    await test.step("Fill username: ${userName}", async () => {
      await this.nameInput.fill(userName);
    });
  }

  async fillEmail(userEmail) {
    await test.step("Fill email", async () => {
      await this.emailInput.fill(userEmail);
    });
  }

  async fillPassword(userPassword) {
    await test.step("Fill password", async () => {
      await this.passwordInput.fill(userPassword);
    });
  }

  async selectCountry(userCountry) {
    await test.step("Fill country", async () => {
      await this.countrySelect.selectOption(userCountry);
    });
  }

  async selectGender(userGender) {
    await test.step("Select gender", async () => {
      await this.genderCheck(userGender).check();
    });
  }

  async selectHobby(userHobbies) {
    await test.step("Select hobbies", async () => {
      if (userHobbies.length > 0) {
        for (const hobby of userHobbies) {
          await this.hobbyCheck(hobby).check();
        }
      }
    });
  }

  async submitForm() {
    await test.step("Submit form", async () => {
      await this.sendButton.click();
    });
  }

  async expectSuccessMessage() {
    await test.step("Check form submitted success message is visible", async () => {
      await expect(this.successMessageTitle).toBeVisible();
      await expect(this.successMessageBody).toBeVisible();
    });
  }

  async expectRequiredFieldsMessage() {
    await test.step("Check required fields message is visible", async () => {
      await expect(this.nameRequiredMessage).toBeVisible();
      await expect(this.emailRequiredMessage).toBeVisible();
      await expect(this.passwordRequiredMessage).toBeVisible();
      await expect(this.countryRequiredMessage).toBeVisible();
      await expect(this.genderRequiredMessage).toBeVisible();
    });
  }
}
