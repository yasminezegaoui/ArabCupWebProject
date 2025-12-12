import express from "express";
import cors from "cors";

import teamRoutes from "./routes/team.routes.js";
import playerRoutes from "./routes/player.routes.js";
import matchRoutes from "./routes/match.routes.js";
//import leaderboardRoutes from "./routes/leaderboard.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());

app.use("/teams", teamRoutes);

app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
//app.use("/leaderboard", leaderboardRoutes);

export default app;