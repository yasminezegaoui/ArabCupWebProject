import React from 'react';
import { useAppContext } from '../../context/AppContext';


const MatchCard = ({ match, onClick }) => {
  const { teams } = useAppContext();
  
  const homeTeam = teams.find(t => t.id === match.homeTeamId) || match.homeTeam;
  const awayTeam = teams.find(t => t.id === match.awayTeamId) || match.awayTeam;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer"
    >
      <div className="text-sm text-gray-500 mb-3 text-center">
        {new Date(match.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-2xl">{homeTeam?.flag}</span>
          <span className="font-medium truncate">{homeTeam?.name}</span>
        </div>
        {match.status === 'FINISHED' && (
          <div className="text-2xl font-bold text-red-800 px-3">{match.homeScore}</div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-2xl">{awayTeam?.flag}</span>
          <span className="font-medium truncate">{awayTeam?.name}</span>
        </div>
        {match.status === 'FINISHED' && (
          <div className="text-2xl font-bold text-red-800 px-3">{match.awayScore}</div>
        )}
      </div>

      {match.stadium && (
        <div className="text-xs text-gray-500 mt-3 text-center">{match.stadium}</div>
      )}

      <div className="mt-3 text-center">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          match.status === 'FINISHED'
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {match.status === 'FINISHED' ? 'FT' : 'Upcoming'}
        </span>
      </div>
    </div>
  );
};
export default MatchCard;