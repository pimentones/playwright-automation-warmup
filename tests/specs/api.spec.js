import { expect, test } from "@playwright/test";
import { TYPES } from "../data/pokemonType.data";

test("API Test - PokeAPI Type Endpoint", async ({ request }) => {
  const response = await request.get("https://pokeapi.co/api/v2/type/name/");

  const body = await response.json();

  expect(body.damage_relations.doble_damage_from[0].name).toBe(
    TYPES[0].doubleDamage
  );
});

test(`pokemon list`, async ({ request }) => {
  const response = await request.get("https://pokeapi.co/api/v2/pokemon");
  console.log(response.status());
  expect(response.status()).toBe(200);

  console.log(await response.json());
  const body = await response.json();

  expect(body.count).toBe(1328);

  expect(body.results[0].name).toBe("bulbasaur");

  const pokemonResponse = await request.get(body.results[0].url);
  const pokemonsResponseBody = await pokemonResponse.json();
  expect(pokemonsResponseBody.types[0].type.name).toBe(`grass`);
  expect(pokemonsResponseBody.types[1].type.name).toBe(`poison`);
});
