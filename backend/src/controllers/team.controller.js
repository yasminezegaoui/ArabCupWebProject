import { TeamService } from "../services/team.service.js";

export const getAllTeams=async (req,res)=>{
    try{
        const teams=await TeamService.getAllTeams();
        res.json({
            success:true,
            data:teams
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Server Error"});
    }
};

export const getTeamById=async (req,res)=>{
    try{
        const {id}=req.params;
        if (!id){
            return res.status(400).json({
                succes: false,
                message: "Team ID is required"
            })
        }
        const team=await TeamService.getTeamById(id); 
        if(!team){
            return res.status(400).json({
                success:false,
                message:"Team not found!"
            })
        }

        res.json({
            success:true,
            data:team
        });

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"});
    }
};

export const getTeamPlayers=async(req,res)=>{
    try{
        const {id}=req.params;
        if(!id){
            return res.status(400).json({
                success:false,
                message:"Team ID is required"
            });
        }
        const players=await TeamService.getTeamPlayers(id);
        if(players.length===0){
            return res.status(404).json({
                success:false,
                message:"No players found for this team"
            });
        }

        res.json({
            success:true,
            data:players
        });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"});
    }
}

export const getTeamMatches=async(req,res)=>{
    try {
        const {id}=req.params;
        if (!id) {
            return res.status(400).json({
                success:false,
                message:"Team ID is required"
            });

        }
        const matches= await TeamService.getTeamMaches(id);
        if (matches.length===0) {
            return res.status(404).json({
                success:false,
                message:"No matches found for this team"
            });
        }

        res.json({
            success:true,
            data:matches
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"});
    }
}