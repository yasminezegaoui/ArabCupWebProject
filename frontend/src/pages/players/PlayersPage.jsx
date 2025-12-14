import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const PlayersPage = () => {
  const { players, navigate } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredPlayers = players
    .filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'goals') return b.goals - a.goals;
      if (sortBy === 'assists') return b.assists - a.assists;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Players</h1>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="name">Sort by Name</option>
            <option value="goals">Sort by Goals</option>
            <option value="assists">Sort by Assists</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Player</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Goals</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Assists</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Cards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPlayers.map(player => (
                <tr
                  key={player.id}
                  onClick={() => navigate('player-details', player.id)}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{player.name}</div>
                    <div className="text-sm text-gray-500">Age: {player.age}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{player.team?.flag}</span>
                      <span>{player.team?.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{player.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center font-medium">{player.goals}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{player.assists}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="text-yellow-600">⚠ {player.yellowCards}</span>
                    {player.redCards > 0 && (
                      <span className="text-red-600 ml-2">🟥 {player.redCards}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PlayersPage;