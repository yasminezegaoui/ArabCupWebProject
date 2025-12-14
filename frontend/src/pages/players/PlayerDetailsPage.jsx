import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const API_BASE = 'http://localhost:3000';

const PlayerDetailsPage = () => {
  const { selectedId, navigate } = useAppContext();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlayerDetails();
  }, [selectedId]);

  const fetchPlayerDetails = async () => {
    try {
      const res = await fetch(`${API_BASE}/players/${selectedId}`);
      const data = await res.json();
      setPlayer(data.data);
    } catch (error) {
      console.error('Error fetching player:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!player) return <div className="text-center py-12">Player not found</div>;

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('players')}
        className="text-red-800 hover:text-red-900 flex items-center mb-4"
      >
        ← Back to Players
      </button>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{player.team?.flag}</span>
              <span className="text-xl text-gray-600">{player.team?.name}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                {player.position}
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                Age: {player.age}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-800">{player.goals}</div>
          <div className="text-gray-600">Goals</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-800">{player.assists}</div>
          <div className="text-gray-600">Assists</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-yellow-600">{player.yellowCards}</div>
          <div className="text-gray-600">Yellow Cards</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-600">{player.redCards}</div>
          <div className="text-gray-600">Red Cards</div>
        </div>
      </div>
    </div>
  );
};
export default PlayerDetailsPage;