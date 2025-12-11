//seed/seed.js
import { prisma } from "../config/db.js";
import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rawTeams = JSON.parse(readFileSync(resolve(__dirname, "teams.json"), "utf8"));
const rawPlayers = JSON.parse(readFileSync(resolve(__dirname, "players.json"), "utf8"));
const rawMatches = JSON.parse(readFileSync(resolve(__dirname, "matches.json"), "utf8"));
const rawEvents = JSON.parse(readFileSync(resolve(__dirname, "events.json"), "utf8"));

// Clean imported objects: trim keys and remove any `id` fields (avoid accidental malformed keys like "id ")
function cleanRecord(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = k.trim();
    if (key === "id") {
      // preserve numeric ids from JSON so relations keep correct foreign keys
      const n = Number(v);
      if (!Number.isNaN(n)) {
        out[key] = n;
      }
      continue;
    }
    out[key] = v;
  }
  return out;
}

// For players/matches/events: remove IDs to let DB auto-assign unique ones (JSON has duplicates)
function cleanRecordNoId(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = k.trim();
    if (key === "id") continue; // skip id, let DB assign
    out[key] = v;
  }
  return out;
}

const teams = rawTeams.map(cleanRecord);
const players = rawPlayers.map(cleanRecordNoId);
let matches = rawMatches.map(cleanRecordNoId);
const events = rawEvents.map(cleanRecordNoId);

// Ensure match numeric fields are valid (Prisma Int fields can't be null)
matches = matches.map((m) => {
  return {
    ...m,
    homeScore: m.homeScore == null ? 0 : m.homeScore,
    awayScore: m.awayScore == null ? 0 : m.awayScore,
    date: typeof m.date === "string" ? m.date : m.date,
  };
});

async function main() {
  console.log("Starting database seeding...");

  await prisma.matchEvent.deleteMany();
  await prisma.match.deleteMany();
  await prisma.player.deleteMany();
  await prisma.team.deleteMany();

  console.log("Old data cleared.");

  await prisma.team.createMany({ data: teams });
  console.log(`Inserted ${teams.length} teams.`);

  await prisma.player.createMany({ data: players });
  console.log(`Inserted ${players.length} players.`);

  await prisma.match.createMany({ data: matches });
  console.log(`Inserted ${matches.length} matches.`);

  await prisma.matchEvent.createMany({ data: events });
  console.log(`Inserted ${events.length} events.`);

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
