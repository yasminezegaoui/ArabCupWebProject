import express from "express";
import { getAllTeams } from "../controllers/team.controller.js";

const router = express.Router();

router.get("/", getAllTeams());
router.get("/:id", getTeamById());
router.get("/:id/players", getTeamPlayers());
router.get("/:id/matches", getTeamMatches());

export default router;