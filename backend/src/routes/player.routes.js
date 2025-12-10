import express from "express";
import { searchPlayer } from "../controllers/player.controller";

const router = express.Router();

router.get("/",getAllPlayers());
router.get("/:id", getPlayerById());
router.get("/team/:teamId", getPlayersByTeam());
router.get("/search/:name ", searchPlayer())
router.get("/position/:position", getPlayerByPosition());
router.get("/goals/:minGoals", getPlayersByGoals());


export default router;