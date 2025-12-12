import express from "express";
import cors from "cors";
import teamRoutes from "./routes/team.routes.js";
import playerRoutes from "./routes/player.routes.js";
import matchRoutes from "./routes/match.routes.js";
import leaderboardRoutes from "./routes/leaderboard.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => res.json({ success: true, message: "ArabCup API" }));

app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/leaderboard", leaderboardRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found" });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

export default app;
