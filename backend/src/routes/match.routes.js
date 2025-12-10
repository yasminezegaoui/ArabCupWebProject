import express from "express";
import { getAllMatches } from "../controllers/match.controller";

const router= express.Router();

router.get("/", getAllMatches());
router.get ("/:id", getMatchById());
router.get("/upcoming", getUpcomingMaches());
router.get("/finished", getFinishedMatches());
router.get("/:id/details", getMatchDetails());
router.get("/:id/events", getMatchEvents());

export default router;