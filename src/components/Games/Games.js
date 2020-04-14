import React, {useState, useEffect} from 'react';
import api from '../../api';

function Games() {

  const [games,setGames] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/games/top');
      console.log(result);

      let dataArray = result.data.data;
      console.log(dataArray);
      
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1 className="titreGames">Jeux les plus populaires</h1>
      <div className="flexAccueil">

      </div>

    </div>
  )
}
export default Games;
