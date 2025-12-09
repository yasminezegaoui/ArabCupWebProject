import {prisma}  from "../config/db";

export const MatchService={

    //- fetch all matches

    getAllMatches: ()=>prisma.match.findMany({
        include:{
            homeTeam:true,
            awayTeam:true,
        }
    }),
    
    //- fetch one match
    getMatchById: (id)=>prisma.match.findUnique({
        where:{id:parseInt(id)},
        include:{
            homeTeam:true,
            awayTeam:true,
            //machi chert ykon event
        },
    }),

    // upcoming matches 
    getUpcomingMaches:()=>{
        prisma.match.findMany({
            where:{
                status: "upcoming"
            },
            orderBy:{
                data:"asc"
            },
        })

    },
    // finished matches
    getFinishedMatches:()=>{
        prisma.match.findMany({
            where:{
                status: "finished"
            },
            orderBy:{
                data:"desc"
            },
        })
    },
    // match details

    //match events
    getMatchEvents:(id)=>{
        prisma.match.findMany({
            where: {
                matchId: Number(id)
            },
            orderBy: {
                minute: "asc"
            },
        })
    }

};