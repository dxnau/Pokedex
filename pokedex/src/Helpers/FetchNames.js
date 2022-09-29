import axios from "axios";

export default async function fetchNames(offset, limit) {
  const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  let names = [];
  await axios
    .get(endpoint)
    .then((res) => res.data.results.map((pokemon) => names.push(pokemon.name)));

  return names;
}