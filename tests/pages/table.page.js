import { BasePage } from "./base.page.js";

export class TablePage extends BasePage {
  constructor(page) {
    super(page);

    this.name = (name) => page.locator("#tableCharacterName" + name);
    this.house = (house) => page.locator("#tableCharacterHouse" + house);
    this.image = (image) => page.getByRole("img", { name: image });
    this.dateOfBirth = (dateOfBirth) =>
      page.getByRole("cell", { name: dateOfBirth });
    this.actor = (actor) => page.getByRole("cell", { name: actor });
  }

  async navigateToTable() {
    await this.navigateToUrl("/table");
  }

  async expectName(name) {
    await this.expectToBeVisible(this.name(name));
  }

  async expectHouse(house) {
    await this.expectToBeVisible(this.house(house));
  }

  async expectImage(image) {
    await this.expectToBeVisible(this.image(image));
  }

  async expectDateOfBirth(dateOfBirth) {
    await this.expectToBeVisible(this.dateOfBirth(dateOfBirth));
  }

  async expectActor(actor) {
    await this.expectToBeVisible(this.actor(actor));
  }
}
