import { expect } from "@playwright/test";
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
    await this.nameInput.fill(login);
  }

  async fillEmail(userEmail) {
    await this.emailInput.fill(userEmail);
  }

  async fillPassword(userPassword) {
    await this.passwordInput.fill(userPassword);
  }

  async selectCountry(userCountry) {
    await this.countrySelect.selectOption(userCountry);
  }

  async selectGender(userGender) {
    await this.genderCheck(userGender).check();
  }

  async selectHobby(userHobbies) {
    if (userHobbies.length > 0) {
      for (const hobby of userHobbies) {
        await this.hobbyCheck(hobby).check();
      }
    }
  }

  async submitForm() {
    await this.sendButton.click();
  }

  async expectSuccessMessage() {
    await expect(this.successMessageTitle).toBeVisible();
    await expect(this.successMessageBody).toBeVisible();
  }
}
