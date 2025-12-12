import { PlayerServices } from "../services/player.service.js";

export const getAllPlayers=async(req,res)=>{
    try {
        const players= await PlayerServices.getAllPlayers();
        res.json({
            success: true,
            data: players
        });
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const getPlayerById=async(req,res)=>{
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Player ID is required!"
            });
        }
        const player = await PlayerServices.getPlayerById(id);
        if (!player) {
            return res.status(404).json({
                success: false,
                message: "Player not found!"
            });
        }

        return res.json({
            success: true,
            data: player
        });
        
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const getPlayersByTeam=async (req,res) => {
    try {


        const { teamId } = req.params;
        if (!teamId) {
            return res.status(400).json({
                success: false,
                message: "Team ID is required"
            });
        }

        const players = await PlayerServices.getPlayersByTeam(teamId);
        if (!players || players.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No players found for this team"
            });
        }

        return res.json({
            success: true,
            data: players
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}//kmliha

export const getPlayersByGoals=async (req,res) => {
        try {
            const { minGoals } = req.params;
            if (minGoals === undefined) {
                return res.status(400).json({
                    success: false,
                    message: "Minimum goals (minGoals) is required"
                });
            }

            const players = await PlayerServices.getPlayersByGoals(minGoals);
            if (!players || players.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No players found with the given minimum goals"
                });
            }

            return res.json({
                success: true,
                data: players
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error!"
            })
        }
}

export const getPlayerByPosition = async(req,res)=>{
    try {

        const { position } = req.params;
        if (!position) {
            return res.status(400).json({
                success: false,
                message: "Position is required"
            });
        }

        const players = await PlayerServices.getPlayerByPosition(position);
        if (!players || players.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No players found for this position"
            });
        }

        return res.json({
            success: true,
            data: players
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
export const searchPlayer=async(req,res)=>{
    try {
        const {name}=req.params;
        if(!name){
            return res.status(400).json({
                success: false,
                message: "Player name is required"
            })
        }
        const player= await PlayerServices.searchPlayer(name)
        if (player.length === 0) {

            return res.status(400).json({
                success: false,
                message:"Player not found"
            });
        }


        res.json({
            success: true,
            data: player
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}