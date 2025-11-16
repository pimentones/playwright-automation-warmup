import { test, expect } from "@playwright/test";
import hpCharacters from "../data/json/hpCharacters.json";
import { TablePage } from "../pages/table.page";

for (const character of hpCharacters) {
  test(
    "Character" + character.name + " " + character.house,
    async ({ page }) => {
      const nameWithoutSpace = character.name.replace(" ", "");
      const actorWithoutSpace = character.actor.replace("", " ");

      const login = new TablePage(page);
      await login.navigateToTable();
      await login.expectName(nameWithoutSpace);
      await login.expectImage(character.name);
      await login.expectHouse(nameWithoutSpace);
      const birth = character.dateOfBirth ? character.dateOfBirth : "Unknown";
      await login.expectDateOfBirth(birth);
      await login.expectActor(actorWithoutSpace);
    }
  );
}
