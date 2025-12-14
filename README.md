# Arab Cup 2025 – Modern Football Dashboard ⚽

A sleek, modern React dashboard for tracking the Arab Cup 2025 football tournament with real-time statistics, interactive components, and a fully responsive design.

---

## 🚀 Quick Start

```bash
# Clone & install
git clone <repo-url>
cd arab-cup-2025
npm install

# Start development server
npm run dev
```

**Prerequisites**
- Node.js 18+
- Backend API running on http://localhost:3000

---

## ✨ Modern Features

- ⚡ Real-time updates using Context API
- 📱 Fully responsive mobile-first design
- 🎨 Modern UI built with Tailwind CSS
- 🔍 Advanced filtering & sorting
- 🗺️ Client-side routing (React Router)
- 📊 Interactive data visualization

---

## 🏗️ Project Architecture

```text
src/
├── components/          # Reusable UI components
├── context/             # Global state management
├── pages/               # Route components
├── layouts/             # Page layouts
└── utils/               # Helper functions
```

---

## 📁 File Structure & Code Highlights

### 1. Entry Point (main.jsx)

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Initializes the React app with StrictMode for development checks.

---

### 2. Main Application (App.jsx)

```jsx
const App = () => {
  const { currentPage, loading } = useAppContext();

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main />
      <Footer />
    </div>
  );
};
```

Central layout logic with modern loading states.

---

### 3. Context Provider (AppContext.jsx)

```jsx
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('Missing provider');
  return context;
};
```

Modern hook pattern with safety check.

---

### 4. Home Page (HomePage.jsx)

```jsx
export const HomePage = () => {
  const { teams, matches } = useAppContext();

  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsGrid teams={teams} matches={matches} />
      <MatchPreviews matches={matches} />
    </div>
  );
};
```

Modular and scalable component structure.

---

### 5. Teams Page (TeamsPage.jsx)

```jsx
const TeamsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <GroupFilter selected={selectedGroup} />
      <TeamGrid />
    </>
  );
};
```

Filtered views with clean state management.

---

### 6. Players Page (PlayersPage.jsx)

```jsx
const filteredPlayers = players
  .filter(p => p.name.toLowerCase().includes(searchTerm))
  .sort((a, b) =>
    sortBy === 'goals'
      ? b.goals - a.goals
      : sortBy === 'assists'
      ? b.assists - a.assists
      : a.name.localeCompare(b.name)
  );
```

Advanced sorting and filtering logic.

---

### 7. Matches Page (MatchesPage.jsx)

```jsx
const filteredMatches = matches.filter(match => {
  if (filter === 'upcoming') return match.status === 'UPCOMING';
  if (filter === 'finished') return match.status === 'FINISHED';
  return true;
});
```

Clean and readable filter logic.

---

### 8. Match Card (MatchCard.jsx)

```jsx
const MatchCard = ({ match, onClick }) => (
  <div
    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer p-6"
    onClick={onClick}
  >
    <MatchHeader />
    <TeamDisplay />
    <TeamDisplay />
    <MatchFooter />
  </div>
);
```

Modern card UI with hover effects.

---

### 9. Navbar (Navbar.jsx)

```jsx
<nav className="bg-linear-to-r from-red-800 to-red-900 text-white">
```

Responsive navigation with mobile-first approach.

---

### 10. API Client (apiClient.js)

```jsx
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' }
});
```

Centralized API abstraction.

---

### 11. Team Details Page

```jsx
useEffect(() => {
  Promise.all([fetchTeam(), fetchPlayers(), fetchMatches()])
    .then(([team, players, matches]) =>
      setTeamData({ ...team, players, matches })
    );
}, [selectedId]);
```

Parallel data fetching for better performance.

---

### 12. Styling (index.css)

```css
@import "tailwindcss";

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r;
  }
}
```

---

## 🛠️ Development Setup

### Environment Variables

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_ENV=development
```

### Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src",
  "format": "prettier --write src"
}
```

---

## 🎨 Design System

```jsx
<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
  Arab Cup 2025
</h1>
```


## 🧪 Testing

```bash
npm test
```

---

## 📦 Build & Deployment

```bash
npm run build
npm run preview
```

---

Backend for Arab Cup Web Project (Express.js + Prisma + PostgreSQL). Provides REST API for teams, players, matches, and leaderboard.

## Tech Stack

- Node.js, Express.js
- Prisma ORM
- PostgreSQL
- Docker & Docker Compose

## Setup

1. Clone repo & install dependencies:

```bash
git clone https://github.com/yasminezegaoui/ArabCupWebProject
cd backend
npm install

```

1. Create `.env` file:

```
DATABASE_URL=postgresql://postgres:postgres@db:5432/arab_cup?schema=public
PORT=3000

```


1. Run backend:

```bash
npm start

```

## Docker 

Build & start services:

```bash
docker compose up --build

```

Stop services:

```bash
docker compose down

```

---

Built with modern React patterns • Performance-focused • Developer-friendly 🚀
