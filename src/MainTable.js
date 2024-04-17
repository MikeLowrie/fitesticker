import React, { useState, useEffect } from 'react';

const MainTable = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchGames = async () => {
      const data = [{
        name: "Overwatch 2",
        startTime: new Date("2024-04-17T23:00:00Z")
      }, {
        name: "Counter-Strike 2",
        startTime: new Date("2024-04-18T01:00:00Z")
      }, {
        name: "Wreckfest",
        startTime: new Date("2024-04-18T02:30:00Z")
      }, {
        name: "End of Event",
        startTime: new Date("2024-04-18T06:00:00Z")
      }];
      setGames(data);
    };

    fetchGames();
  }, []);

  const now = new Date();
  const sortedGames = games.sort((a, b) => a.startTime - b.startTime);
  const closestGame = sortedGames.find(game => new Date(game.startTime) >= now);
  const nextGames = sortedGames.filter(game => new Date(game.startTime) > now);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>{closestGame ? closestGame.name : ''}</td>
              <td style={{ width: '50%' }}>
                {closestGame ? `Starts in ${formatTime(now, closestGame.startTime)}` : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>{nextGames[1] ? nextGames[1].name : ''}</td>
              <td style={{ width: '50%' }}>
                {nextGames[0] ? `Starts in ${formatTime(now, nextGames[1].startTime)}` : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>{nextGames[2] ? nextGames[2].name : ''}</td>
              <td style={{ width: '50%' }}>
                {nextGames[1] ? `Starts in ${formatTime(now, nextGames[2].startTime)}` : ''}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ flex: '25%' }}>
        <table style={{ width: '100%', height: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%' }}>FITES</td>
              <td style={{ width: '50%' }}>{formatTime(now)}</td>
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
  return `${hours}:${minutes}:${seconds}`;
};

export default MainTable;