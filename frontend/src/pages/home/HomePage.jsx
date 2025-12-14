import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

import MatchCard from '../../components/ui/MatchCard';

export const HomePage = () => {
  const { navigate, teams, matches } = useAppContext();

  const upcomingMatches = matches.filter(m => m.status === 'UPCOMING').slice(0, 3);
  const recentMatches = matches.filter(m => m.status === 'FINISHED').slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="bg-linear-to-r from-red-600 to-red-800 text-white rounded-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Arab Cup 2025</h1>
        <p className="text-lg md:text-xl opacity-90 mb-6">
          Experience the excitement of Arab football's premier tournament
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate('matches')}
            className="bg-white text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Matches
          </button>
          <button
            onClick={() => navigate('leaderboard')}
            className="bg-red-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-950 transition"
          >
            Standings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-800">{teams.length}</div>
          <div className="text-gray-600">Teams</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-800">{matches.length}</div>
          <div className="text-gray-600">Matches</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-800">4</div>
          <div className="text-gray-600">Groups</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-3xl font-bold text-red-800">
            {matches.filter(m => m.status === 'UPCOMING').length}
          </div>
          <div className="text-gray-600">Upcoming</div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Upcoming Matches</h2>
          <button
            onClick={() => navigate('matches')}
            className="text-red-800 hover:text-red-900 flex items-center"
          >
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {recentMatches.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
