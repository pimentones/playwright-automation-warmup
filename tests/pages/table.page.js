import { expect } from "@playwright/test";
import { LOGIN_MESSAGES, LOGIN_LABELS } from "../data/login.data.js";

export class TablePage {
  constructor(page) {
    this.page = page;
    this.image = (image) => page.getByRole("img", { name: image });
    this.name = (name) => page.locator("#tableCharacterName" + name);
    this.house = (house) => page.locator("#tableCharacterHouse" + house);
    this.dateOfBirth = (dateOfBirth) =>
      page.getByRole("cell", { name: dateOfBirth });
    this.actor = (actor) => page.locator("#tableCharacterActor" + actor);

    // await expect(
    //   page.locator("#tableCharacterName" + nameWithoutSpace)
    // ).toBeVisible();

    // await expect(page.getByRole("img", { name: c.name })).toBeVisible();

    // await expect(
    //   page.locator("#tableCharacterHouse" + nameWithoutSpace)
    // ).toHaveText(c.house);

    // if (c.dateOfBirth) {
    //   await expect(
    //     page.getByRole("cell", { name: c.dateOfBirth })
    //   ).toBeVisible();
    // } else {
    //   await expect(page.getByRole("cell", { name: "Unknown" })).toBeVisible();
    // }

    // const birth = c.dateOfBirth ? c.dateOfBirth : "Unknown";
    // await expect(page.getByRole("cell", { name: birth })).toBeVisible();
  }

  async navigateToTable() {
    await this.page.goto("/table");
  }

  async expectName(name) {
    await expect(this.name(name)).toBeVisible();
  }

  async expectHouse(house) {
    await expect(this.house(house)).toBeVisible();
  }

  async expectImage(image) {
    await expect(this.image(image)).toBeVisible();
  }

  async expectDateOfBirth(dateOfBirth) {
    await expect(this.dateOfBirth(dateOfBirth)).toBeVisible();
  }

  async expectActor(actor) {
    await expect(this.actor(actor)).toBeVisible();
  }
}
