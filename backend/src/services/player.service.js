import {prisma} from "../config/db.js";

export const PlayerServices= {
    //fetch all players 
    getAllPlayers: ()=> prisma.player.findMany(
        {include:{team:true}} 
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
    }),
    //filter players by goals 
    getPlayersByGoals: (minGoals)=> prisma.player.findMany({
        where:{
            goals:{gte:parseInt(minGoals)}
        },
        include:{team:true},
        orderBy:{goals:"desc"}
    }), 
    //player by position 
    getPlayerByPosition:(position)=> prisma.player.findMany({
        where:{position:position},
        include:{team:true},
    }),

    //search player 
    searchPlayer:(name)=>{
        return prisma.player.findMany({
            where:{
                name:{contains:name,
                mode:"insensitive"
                }

            },
            include:{
                team:true,  
            }

        })
    }
    
}