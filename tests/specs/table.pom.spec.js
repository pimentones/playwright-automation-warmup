import { test, expect } from "@playwright/test";
import hpCharacters from "../data/json/hpCharacters.json";
import { TablePage } from "../pages/table.page";

for (const c of hpCharacters) {
  test("Character" + c.name + " " + c.house, async ({ page }) => {
    const nameWithoutSpace = c.name.replace(" ", "");
    const actorWithoutSpace = c.actor.replace(" ", "");

    const login = new TablePage(page);
    await login.navigateToTable();
    await login.expectName(nameWithoutSpace);
    await login.expectImage(c.name);
    await login.expectHouse(nameWithoutSpace);
    const birth = c.dateOfBirth ? c.dateOfBirth : "Unknown";
    await login.expectDateOfBirth(birth);
    await login.expectActor(actorWithoutSpace);

    console.log(hpCharacters);
  });
}
