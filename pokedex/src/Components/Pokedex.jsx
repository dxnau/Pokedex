import { useState, useEffect } from 'react';
import FetchNames from '../Helpers/FetchNames.js';
import FetchPokemon from '../Helpers/FetchPokemon.js';
import PokedexEntry from './PokedexEntry.jsx';
import Team from './Team.jsx';

const limit = 60;
const increase = 20;
function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const getPokemons = async () => {
    let pokemons = await Promise.all(
      (await FetchNames(offset, limit)).map(async (name) => await FetchPokemon(name))
    );
    setAllPokemons((prev) => [...prev, ...pokemons]);
    setOffset((current) => current + increase);
  };

  useEffect(() => {
    getPokemons();
  }, [])

  return (
    <div>
      <div id="title">
        <a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/220929/3a93b3a770f738e70b9f89412489ef6d.png" alt="pokemon-font" border="0"/></a>
      </div>
      <div className="pokeListTeam">
        <div className="pokelist">
          {allPokemons
            .map((pokemon, index) => {
              return(
                <PokedexEntry
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                  image={pokemon.image}
                  bio={pokemon.bio}
                  stats={pokemon.stats}
                />
              )
            })
          }
        </div>
        <Team />
      </div>
      <div className="load-button">
        <button id="load" onClick={getPokemons}>
          Load more
        </button>
      </div>
    </div>
  );
}

export default Pokedex;