import { MatchService } from "../services/match.service.js";


export const getAllMatches= async (req,res) => {
    try {
        const match= await MatchService.getAllMatches();
        return res.json({
            success: true,
            data: match
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


export const getMatchById= async (req,res) => {
    try {
        const {id}=req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message:"Id match is required"
            })
        }
        const match= await MatchService.getMatchById(id);
        if (!match) {
            return res.status(400).json({
                success: false,
                message:" Match not found"
            })
        }
        res.json({
            success: true,
            data: match
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const getUpcomingMaches= async (req,res) => {
    try {
        const match= await MatchService.getUpcomingMaches()
        if (!match) {
            return res.status(400).json({
                success: false,
                message:"No match found"
            })            
        }

        res.json({
            success: true,
            data: match
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


export const getFinishedMatches= async (req,res) => {
    try {
        const match= await MatchService.getFinishedMatches()
        if (!match) {
            return res.status(400).json({
                success: false,
                message:"No match found"
            })            
        }
        
        res.json({
            success: true,
            data: match
        })    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


export const getMatchDetails= async (req,res) => {
    try {
        const {id}=req.params
        if (!id) {
            return res.status(400).json({
                success: false,
                message:"Id match is required"
            })            
        }
        const match = await MatchService.getMatchDetails(id);

        if (!match) {
            return res.status(400).json({
                success: false,
                message: "match not found"
            })            
        }
        res.json({
            success:true,
            data: match
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


export const getMatchEvents= async (req,res) => {
    try {
        const {id}= req.params
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Id match is required"
            })
        }
        const matchEvent=await MatchService.getMatchEvents(id);
        if (!matchEvent) {
            return res.status(400).json({
                success: false,
                message: "No event found in this match!"
            })
        }

        res.json({
            success: true,
            data: matchEvent
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}