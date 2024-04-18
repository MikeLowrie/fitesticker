import React, { useState, useEffect } from 'react';

const MainTable = () => {
  const [games, setGames] = useState([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
        setNow(new Date());
    }, 1000);
    
    const fetchGames = async () => {
      /* UTC times are four hours ahead of EST (double check, might be 5 depending on daylight savings) */
      const data = [{
        name: "Overwatch 2",
        startTime: new Date("2024-04-18T13:00:00Z"),
        endTime: new Date("2024-04-18T15:00:00Z")
      }, {
        name: "Counter-Strike 2",
        startTime: new Date("2024-04-19T01:00:00Z"),
        endTime: new Date("2024-04-19T02:00:00Z")
      }, {
        name: "Wreckfest",
        startTime: new Date("2024-04-19T02:30:00Z"),
        endTime: new Date("2024-04-19T03:30:00Z")
      }, {
        name: "End of Event",
        startTime: new Date("2024-04-19T06:00:00Z"),
        endTime: new Date("2024-04-19T07:00:00Z")
      }];
      setGames(data);
    };

    fetchGames();

    return () => {
        clearInterval(intervalId);
    };
  }, []);
  const sortedGames = games.sort((a, b) => a.startTime - b.startTime);
  const nextGames = sortedGames.filter(game => game.endTime > now); //TODO: Make this have a buffer for stating a live tournament

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr style={{ background: 'lightblue' }}>
              <td style={{ width: '50%', textAlign: 'right', fontSize: '36px' }}>{nextGames[0] ? nextGames[0].name : ''}</td>
              <td style={{ width: '50%', textAlign: 'center', fontSize: '36px' }}>
                {nextGames[0] ? `${getGameInfo(nextGames[0])}` : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr style={{ background: 'lightgray' }}>
              <td style={{ width: '50%', textAlign: 'right', fontSize: '36px'  }}>{nextGames[1] ? nextGames[1].name : ''}</td>
              <td style={{ width: '50%', textAlign: 'center', fontSize: '36px' }}>
                {nextGames[1] ? `${getGameInfo(nextGames[1])}` : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr style={{ background: 'lightblue' }}>
              <td style={{ width: '50%', textAlign: 'right', fontSize: '36px'  }}>{nextGames[2] ? nextGames[2].name : ''}</td>
              <td style={{ width: '50%', textAlign: 'center', fontSize: '36px' }}>
                {nextGames[2] ? `${getGameInfo(nextGames[2])}` : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr style={{ background: 'lightgray' }}>
              <td style={{ width: '50%', textAlign: 'right', fontSize: '36px'  }}>FITES LAN Ticker</td>
              <td style={{ width: '50%', textAlign: 'center', fontSize: '36px' }}>{`${now.toTimeString()}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const formatTime = (start, end) => {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const diff = endTime - startTime;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * Returns the game information based on the current game state.
 *
 * @param {Object} game - The game object containing the start time.
 * @return {string} A string saying the game is live, or the time until that game starts.
 */
const getGameInfo = (game) => {
  const now = new Date();
  var output = "Tournament is live!";
  if(game.startTime > now) {
    output = `Starts in ${formatTime(now, game.startTime)}`
  }
  return output;
}

export default MainTable;