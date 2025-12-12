import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import TeamsPage from "../pages/teams/TeamsPage.jsx";
import TeamDetailsPage from "../pages/teams/TeamDetailsPage.jsx";
import PlayersPage from "../pages/players/PlayersPage.jsx";
import PlayerDetailsPage from "../pages/players/PlayerDetailsPage.jsx";
import MatchesPage from "../pages/matches/MatchesPage";
import MatchDetailsPage from "../pages/matches/MatchDetailsPage.jsx";
import LeaderboardPage from "../pages/leaderboard/LeaderboardPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      // TEAMS
      {
        path: "teams",
        element: <TeamsPage />,
      },
      {
        path: "teams/:id",
        element: <TeamDetailsPage />,
      },

      // PLAYERS
      {
        path: "players",
        element: <PlayersPage />,
      },
      {
        path: "players/:id",
        element: <PlayerDetailsPage />,
      },

      // MATCHES
      {
        path: "matches",
        element: <MatchesPage />,
      },
      {
        path: "matches/:id",
        element: <MatchDetailsPage />,
      },

      // LEADERBOARD
      {
        path: "leaderboard",
        element: <LeaderboardPage />,
      },
    ],
  },

  // 404 pages
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
