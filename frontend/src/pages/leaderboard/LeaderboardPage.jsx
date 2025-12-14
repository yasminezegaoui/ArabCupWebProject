import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const LeaderboardPage = () => {
  const { leaderboard } = useAppContext();
  const [selectedGroup, setSelectedGroup] = useState('A');

  const groups = ['A', 'B', 'C', 'D'];
  const standings = leaderboard[selectedGroup] || [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Leaderboard</h1>

      <div className="bg-white rounded-lg shadow p-2 flex gap-2">
        {groups.map(group => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
              selectedGroup === group
                ? 'bg-red-800 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            Group {group}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pos</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">P</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">W</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">D</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">L</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">GF</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">GA</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">GD</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Pts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {standings.map((team, idx) => (
                <tr key={team.teamId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-700">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{team.teamName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{team.played}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{team.wins}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{team.draws}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{team.losses}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{team.goalsFor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">{team.goalsAgainst}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={team.goalDiff >= 0 ? 'text-green-600' : 'text-red-600'}>
                      {team.goalDiff > 0 ? '+' : ''}{team.goalDiff}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className="font-bold text-red-800">{team.points}</span>
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

export default LeaderboardPage;