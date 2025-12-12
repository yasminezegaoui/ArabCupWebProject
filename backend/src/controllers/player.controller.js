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
            message:" Internal Server Error"
        });
    }
}

export const getPlayerById=async(req,res)=>{
    try {
        const {id}=req.params;

        if (!id){
            res.status(400).json({
                success: false,
                message: "Player ID is required!"
            });
        }
        const player= await PlayerServices.getPlayerById();
        if(!player){
            res.status(400).json({
                success: false,
                message: "Player not found!"
            })
        }
        res.json({
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



        res.json({
            success: true,
            data: player
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
        

        return res.json({
            success:true,
            data : player
        })
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
        if(!player){
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