import { prisma } from "../config/db.js";
import { computeLeaderboard } from "../utils/computeLeaderboard.js";

export const LeaderboardService = {
  getLeaderboard: async () => {
    const teams = await prisma.team.findMany();
    const matches = await prisma.match.findMany({
      include: { homeTeam: true, awayTeam: true }
    });
    const groups = computeLeaderboard(matches, teams);
    return groups;
  },

  getGroup: async (groupName) => {
    const teams = await prisma.team.findMany({ where: { group: groupName } });
    if (!teams || teams.length === 0) return null;

    const matches = await prisma.match.findMany({
      where: {
        OR: teams.flatMap((t) => [{ homeTeamId: t.id }, { awayTeamId: t.id }])
      },
      include: { homeTeam: true, awayTeam: true }
    });

    const groups = computeLeaderboard(matches, teams);
    return groups[groupName] || [];
  }
};
