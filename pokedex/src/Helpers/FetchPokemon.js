import axios from "axios";

const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

export default async function fetchPokemon(pokeName) {
  const pokeUrl = mainUrl + pokeName;
  let pokemon = {
    id: 0,
    name: "",
    image: "",
    bio: {
      description: ""
    },
    stats: {
      hp: 0,
      atk: 0,
      def: 0,
      sp_atk: 0,
      sp_def: 0,
      speed: 0,
    },
  };

  let pokemonDetailsRes = await axios.get(pokeUrl);
  const res = pokemonDetailsRes.data;

  pokemon.id = res.id;
  pokemon.name = res.name;
  pokemon.image = res.sprites.front_default;

  let speciesRes = await axios.get(res.species.url);
  const species = speciesRes.data;

  pokemon.bio.description = species.flavor_text_entries[0].flavor_text;
  pokemon.stats.hp = res.stats[0].base_stat;
  pokemon.stats.atk = res.stats[1].base_stat;
  pokemon.stats.def = res.stats[2].base_stat;
  pokemon.stats.sp_atk = res.stats[3].base_stat;
  pokemon.stats.sp_def = res.stats[4].base_stat;
  pokemon.stats.speed = res.stats[5].base_stat;

  return pokemon;
}