import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const TeamsPage = () => {
  const { teams, navigate } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');

  const groups = ['All', 'A', 'B', 'C', 'D'];

  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === 'All' || team.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Teams</h1>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {groups.map(group => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                  selectedGroup === group
                    ? 'bg-red-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {group === 'All' ? 'All Groups' : `Group ${group}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTeams.map(team => (
          <div
            key={team.id}
            onClick={() => navigate('team-details', team.id)}
            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer p-6"
          >
            <div className="text-5xl text-center mb-4">{team.flag}</div>
            <h3 className="text-xl font-bold text-center mb-2">{team.name}</h3>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-600 flex-wrap">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                Group {team.group}
              </span>
              {team.fifaRank && (
                <span className="text-gray-500">FIFA: #{team.fifaRank}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamsPage;