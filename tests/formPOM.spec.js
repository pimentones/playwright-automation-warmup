import test from "@playwright/test";
import { FormPage } from "./pages/form.page";
import { USERS } from "./data/form.data.js";

for (const user of USERS) {
  test("Form filling " + user.name, async ({ page }) => {
    const form = new FormPage(page);

    await form.navigateToForm();
    await form.fillName(user.name);
    await form.fillEmail(user.email);
    await form.fillPassword(user.password);
    await form.selectCountry(user.countryValue);
  });
}
