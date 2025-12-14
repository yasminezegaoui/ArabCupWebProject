import { useState } from 'react';
import { Trophy, Users, Star, Calendar, Menu, X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Navbar = () => {
  const { navigate, currentPage } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Trophy },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'players', label: 'Players', icon: Star },
    { id: 'matches', label: 'Matches', icon: Calendar },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
  ];

  return (
    <nav className="bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
            <Trophy className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Arab Cup 2025</span>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all ${
                  currentPage === item.id ? 'bg-red-700 text-white' : 'hover:bg-red-700/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { navigate(item.id); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 mb-1 ${
                  currentPage === item.id ? 'bg-red-700' : 'hover:bg-red-700/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
