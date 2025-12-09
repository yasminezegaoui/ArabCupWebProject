import {prisma} from "../config/db";

export const PlayerServices= {
    //fetch all players 
    getAllPlayers: ()=> prisma.player.findMany(
        //{include:{team:true}} ??
    ),

    //fetch one player 
    getPlayerById:(id)=> prisma.player.findUnique({
        where:{id:parseInt(id)},
        include:{
            team:true,

        }
    }),
    //filter players by team
    getPlayersByTeam:(teamId)=> prisma.player.findMany({
        where:{teamId:parseInt(teamId)},
        include:{team:true}
    })
    //filter players by goals 
    //search player 
    
}