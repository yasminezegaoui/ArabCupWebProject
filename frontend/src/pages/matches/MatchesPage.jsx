import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

import MatchCard from '../../components/ui/MatchCard';

const MatchesPage = () => {
  const { matches, navigate } = useAppContext();
  const [filter, setFilter] = useState('all');

  const filteredMatches = matches.filter(match => {
    if (filter === 'upcoming') return match.status === 'UPCOMING';
    if (filter === 'finished') return match.status === 'FINISHED';
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Matches</h1>

      <div className="bg-white rounded-lg shadow p-2 flex gap-2">
        {[
          { id: 'all', label: 'All Matches' },
          { id: 'upcoming', label: 'Upcoming' },
          { id: 'finished', label: 'Finished' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
              filter === tab.id
                ? 'bg-red-800 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMatches.map(match => (
          <MatchCard key={match.id} match={match} onClick={() => navigate('match-details', match.id)} />
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;