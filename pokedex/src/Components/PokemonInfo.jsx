import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonInfo = ({
  id, name, image, bio, stats, exit
}) => {

  const addToTeam = (name, image) => {
    const pokemon = [name, image]
    axios.post('/pokedex', pokemon)
      .catch((err) => {console.log(err)})
  }

  return (
    <div className="pokemon-info">
      <div onClick={() => {exit()}} className="overlay"/>
        <div className="pokemon-card">
          <div className="card-header">
            <h1>{name}</h1>
            <button id="add" onClick={() => addToTeam(name, image)}>Add to team</button>
          </div>
          <div>#{id}</div>
          <img src={image} alt="pokemon"/>
          <div>{bio.description}</div>
          {Object.keys(stats).map((key) => {
            return (
              <div className="stats">
                <div>{key}</div>
                <div>{stats[key]}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PokemonInfo;