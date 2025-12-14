import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

import MatchCard from '../../components/ui/MatchCard';

const API_BASE = 'http://localhost:3000';


const TeamDetailsPage = () => {
  const { selectedId, navigate } = useAppContext();
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamDetails();
  }, [selectedId]);

  const fetchTeamDetails = async () => {
    try {
      const [teamRes, playersRes, matchesRes] = await Promise.all([
        fetch(`${API_BASE}/teams/${selectedId}`),
        fetch(`${API_BASE}/teams/${selectedId}/players`),
        fetch(`${API_BASE}/teams/${selectedId}/matches`)
      ]);

      const team = await teamRes.json();
      const players = await playersRes.json();
      const matches = await matchesRes.json();

      setTeamData({
        ...team.data,
        players: players.data || [],
        matches: matches.data || []
      });
    } catch (error) {
      console.error('Error fetching team details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!teamData) return <div className="text-center py-12">Team not found</div>;

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('teams')}
        className="text-red-800 hover:text-red-900 flex items-center mb-4"
      >
        ← Back to Teams
      </button>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-6">
          <div className="text-7xl">{teamData.flag}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{teamData.name}</h1>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                Group {teamData.group}
              </span>
              {teamData.fifaRank && (
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  FIFA Rank: #{teamData.fifaRank}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Squad</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Age</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Goals</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Assists</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teamData.players.map(player => (
                  <tr
                    key={player.id}
                    onClick={() => navigate('player-details', player.id)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{player.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{player.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{player.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{player.goals}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{player.assists}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamData.matches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsPage;