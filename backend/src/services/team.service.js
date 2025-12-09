import { prisma } from "../config/db";

export const TeamService={

    //- fetch all teams

    getAllTeams: ()=>prisma.team.findMany(),
    //- fetch one team

    getTeamById: (id)=>prisma.team.findUnique({
        where:{id:parseInt(id)},
        include:{
            players: true,
            matchesHome:true,
            matchesAway:true
        }
    }),
    //- fetch team players
    getTeamPlayers:(id)=>prisma.player.findMany({
        where:({teamId:parseInt(id)}),
        include:{team:true},
    }),
    //- fetch team matches
    getTeamMaches:(id)=>prisma.match.findMany({
        where:[
            
            {homeTeamId:parseInt(id)},
            {awayTeamId:parseInt(id)}
            
        ],
        include:{
            homeTeam:true,
            awayTeam:true,
        }
    })
}