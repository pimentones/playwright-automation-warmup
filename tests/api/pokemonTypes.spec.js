import { expect, test } from "@playwright/test";
import { TYPES } from "../data/pokemonType.data";

test.describe("API Test - PokeAPI Endpoint", () => {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  test(`Valid pokemon name returns 200`, async ({ request }) => {
    const response = await request.get(`${baseUrl}/kakuna`);

    expect(response.status()).toBe(200);
  });

  test(`Non-existing pokemon name return 404`, async ({ request }) => {
    const response = await request.get(`${baseUrl}/non-existing`);

    expect(response.status()).toBe(404);
  });

  test(`Pokemon attribute name matches pokemon endpoint's name`, async ({
    request,
  }) => {
    const response = await request.get(`${baseUrl}/kakuna`);

    const body = await response.json();

    expect(body.name).toBe("kakuna");
  });

  test(`Valid Pokemon id is an integer`, async ({ request }) => {
    const response = await request.get(`${baseUrl}/kakuna`);

    const body = await response.json();

    expect(body.id).toBe(14);
    expect(typeof body.id).toBe("number");
  });

  test(`Pokemon types exist and are valid`, async ({ request }) => {
    const response = await request.get(`${baseUrl}/kakuna`);

    const body = await response.json();

    expect(body.types).toBeDefined();
    expect(body.types[0].type.name).toBe("bug");
    expect(body.types[1].type.name).toBe("poison");
    body.types.forEach((t) => {
      expect(t.type.name).toBeTruthy();
      expect(typeof t.type.name).toBe("string");
    });
  });

  test("Pokemon types array cannot be empty", async ({ request }) => {
    const response = await request.get(`${baseUrl}/kakuna`);
    const body = await response.json();

    expect(body.types.length).toBeGreaterThan(0);
  });
});
