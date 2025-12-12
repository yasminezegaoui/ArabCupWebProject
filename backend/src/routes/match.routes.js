import express from "express";

import { getAllMatches, getMatchById, getUpcomingMaches, getFinishedMatches, getMatchDetails, getMatchEvents } from "../controllers/match.controller.js";

const router = express.Router();

router.get("/", getAllMatches);
router.get("/upcoming", getUpcomingMaches);
router.get("/finished", getFinishedMatches);
router.get("/:id/details", getMatchDetails);
router.get("/:id/events", getMatchEvents);
router.get("/:id", getMatchById);

export default router;