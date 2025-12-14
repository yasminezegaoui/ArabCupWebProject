import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';


const API_BASE = 'http://localhost:3000';

const MatchDetailsPage = () => {
  const { selectedId, navigate } = useAppContext();
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMatchDetails();
  }, [selectedId]);

  const fetchMatchDetails = async () => {
    try {
      const [detailsRes, eventsRes] = await Promise.all([
        fetch(`${API_BASE}/matches/${selectedId}/details`),
        fetch(`${API_BASE}/matches/${selectedId}/events`)
      ]);

      const details = await detailsRes.json();
      const events = await eventsRes.json();

      setMatchData({
        ...details.data,
        events: events.data || []
      });
    } catch (error) {
      console.error('Error fetching match details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (!matchData) return <div className="text-center py-12">Match not found</div>;

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('matches')}
        className="text-red-800 hover:text-red-900 flex items-center mb-4"
      >
        ← Back to Matches
      </button>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center mb-6">
          <div className="text-sm text-gray-500 mb-2">
            {new Date(matchData.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          {matchData.stadium && (
            <div className="text-sm text-gray-500">{matchData.stadium}</div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <div className="text-5xl mb-3">{matchData.homeTeam.flag}</div>
            <div className="text-xl font-bold">{matchData.homeTeam.name}</div>
          </div>

          <div className="px-8">
            {matchData.status === 'FINISHED' ? (
              <div className="text-5xl font-bold text-red-800">
                {matchData.homeScore} - {matchData.awayScore}
              </div>
            ) : (
              <div className="text-2xl font-bold text-gray-400">VS</div>
            )}
          </div>

          <div className="flex-1 text-center">
            <div className="text-5xl mb-3">{matchData.awayTeam.flag}</div>
            <div className="text-xl font-bold">{matchData.awayTeam.name}</div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <span className={`inline-block px-4 py-2 rounded-full font-medium ${
            matchData.status === 'FINISHED'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {matchData.status === 'FINISHED' ? 'Full Time' : 'Upcoming'}
          </span>
        </div>
      </div>

      {matchData.events.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Match Events</h2>
          <div className="space-y-3">
            {matchData.events.map((event, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-600 w-12 text-center">
                  {event.minute}'
                </div>
                <div className="flex-1">
                  <div className="font-medium">
                    {event.type === 'GOAL' && '⚽ Goal'}
                    {event.type === 'YELLOW' && '🟨 Yellow Card'}
                    {event.type === 'RED' && '🟥 Red Card'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchDetailsPage;