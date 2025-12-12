export function computeLeaderboard(matches, teams) {
  const teamMap = {};
  teams.forEach((t) => {
    teamMap[t.id] = {
      teamId: t.id,
      teamName: t.name,
      group: t.group,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDiff: 0,
      points: 0
    };
  });

  matches.forEach((m) => {
    if (!m) return;
    if (m.status && String(m.status).toUpperCase() !== "FINISHED") return;
    const home = teamMap[m.homeTeamId];
    const away = teamMap[m.awayTeamId];
    if (!home || !away) return;

    home.played += 1;
    away.played += 1;

    home.goalsFor += m.homeScore ?? 0;
    home.goalsAgainst += m.awayScore ?? 0;
    away.goalsFor += m.awayScore ?? 0;
    away.goalsAgainst += m.homeScore ?? 0;

    if ((m.homeScore ?? 0) > (m.awayScore ?? 0)) {
      home.wins += 1;
      away.losses += 1;
      home.points += 3;
    } else if ((m.homeScore ?? 0) < (m.awayScore ?? 0)) {
      away.wins += 1;
      home.losses += 1;
      away.points += 3;
    } else {
      home.draws += 1;
      away.draws += 1;
      home.points += 1;
      away.points += 1;
    }
  });

  const groups = {};
  Object.values(teamMap).forEach((t) => {
    t.goalDiff = t.goalsFor - t.goalsAgainst;
    if (!groups[t.group]) groups[t.group] = [];
    groups[t.group].push(t);
  });

  Object.keys(groups).forEach((g) => {
    groups[g].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return a.teamName.localeCompare(b.teamName);
    });
  });

  return groups;
}
