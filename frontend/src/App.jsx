import React, { useState, useEffect} from 'react';
import { HomePage } from './pages/home/HomePage';
import { useAppContext ,AppContext} from './context/AppContext';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import TeamsPage from './pages/teams/TeamsPage';
import TeamDetailsPage from './pages/teams/TeamDetailsPage';
import PlayersPage from './pages/players/PlayersPage';
import PlayerDetailsPage from './pages/players/PlayerDetailsPage';
import MatchesPage from './pages/matches/MatchesPage';
import MatchDetailsPage from './pages/matches/MatchDetailsPage';
import LeaderboardPage from './pages/leaderboard/LeaderboardPage';
import { Trophy } from 'lucide-react';

// API Base URL
const API_BASE = 'http://localhost:3000';

const AppProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [leaderboard, setLeaderboard] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const [teamsRes, playersRes, matchesRes, leaderboardRes] = await Promise.all([
        fetch(`${API_BASE}/teams`),
        fetch(`${API_BASE}/players`),
        fetch(`${API_BASE}/matches`),
        fetch(`${API_BASE}/leaderboard`)
      ]);

      const teamsData = await teamsRes.json();
      const playersData = await playersRes.json();
      const matchesData = await matchesRes.json();
      const leaderboardData = await leaderboardRes.json();

      setTeams(teamsData.data || []);
      setPlayers(playersData.data || []);
      setMatches(matchesData.data || []);
      setLeaderboard(leaderboardData.data || {});
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const navigate = (page, id = null) => {
    setCurrentPage(page);
    setSelectedId(id);
    window.scrollTo(0, 0);
  };

  return (
    <AppContext.Provider value={{
      teams, players, matches, leaderboard, loading,
      currentPage, selectedId, navigate, setTeams, setPlayers, setMatches
    }}>
      {children}
    </AppContext.Provider>
  );
};
const App = () => {
  const { currentPage, loading } = useAppContext();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Trophy className="h-16 w-16 text-red-800 mx-auto mb-4 animate-pulse" />
          <div className="text-xl font-semibold text-gray-700">Loading Arab Cup 2025...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'teams' && <TeamsPage />}
        {currentPage === 'team-details' && <TeamDetailsPage />}
        {currentPage === 'players' && <PlayersPage />}
        {currentPage === 'player-details' && <PlayerDetailsPage />}
        {currentPage === 'matches' && <MatchesPage />}
        {currentPage === 'match-details' && <MatchDetailsPage />}
        {currentPage === 'leaderboard' && <LeaderboardPage />}
      </main>

      <Footer />
    </div>
  );
};

export default function Root() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}