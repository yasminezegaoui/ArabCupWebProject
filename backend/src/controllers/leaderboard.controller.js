import { LeaderboardService } from "../services/leaderboard.service.js";

export const getLeaderboard = async (req, res) => {
  try {
    const groups = await LeaderboardService.getLeaderboard();
    return res.json({ success: true, data: groups });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getGroupLeaderboard = async (req, res) => {
  try {
    const { group } = req.params;
    if (!group) return res.status(400).json({ success: false, message: "Group is required" });
    const standings = await LeaderboardService.getGroup(group);
    if (!standings) return res.status(404).json({ success: false, message: "Group not found or no teams" });
    return res.json({ success: true, data: standings });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

