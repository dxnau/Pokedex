import { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('/pokedex')
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {console.log(err)})
  }, [])

  return (
    <div className="image">
      <div id="your-team">
      <a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/220929/fc701e919ed2169e1614c7f6987eadce.png" alt="pokemon-font" border="0"/></a>
      </div>
      <div className="team">
      {team
        .map((obj, index) => {
          return(
            <div className="pokemon-team">
              <img src={obj.image}/>
              <div id="name">{obj.pokemon}</div>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default Team;