import { useEffect, useState } from 'react';
import PokemonInfo from './PokemonInfo.jsx';

const PokedexEntry = ({
  id, name, image, bio, stats
}) => {

  const [showInfo, setShowInfo] = useState(false);

  const exit = () => {
    console.log('exiting')
    setShowInfo(true)
  }

  return (
    <div onClick={() => setShowInfo(true)}>
      <div className="entry">
        <div id="entry-id">#{id}</div>
        <img src={image} alt="PokeImg"/>
        <div id="entry-name">{name}</div>
      </div>

      {showInfo
      ? <PokemonInfo
        id={id}
        name={name}
        image={image}
        bio={bio}
        stats={stats}
        exit={() => {exit()}}
      /> : null}
    </div>
  )
}

export default PokedexEntry;