import express from "express";
import { getLeaderboard, getGroupLeaderboard } from "../controllers/leaderboard.controller.js";

const router = express.Router();

router.get("/", getLeaderboard);
router.get("/:group", getGroupLeaderboard);

export default router;
