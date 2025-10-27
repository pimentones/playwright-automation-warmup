// @ts-check
import { test, expect } from "@playwright/test";

test("playground", async ({ page }) => {
  await page.goto("https://playground-drab-six.vercel.app/");

  await expect(page).toHaveTitle("Playground page");

  await page.getByRole("link", { name: "LOGIN" }).click();

  await expect(page.getByRole("heading", { name: "LOGIN" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "LOGIN" })).toHaveText(
    "Login"
  );
});
