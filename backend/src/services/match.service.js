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
        return prisma.match.findMany({
            where:{
                status: "upcoming"
            },
            orderBy:{
                date:"asc"
            },
        })

    },
    // finished matches
    getFinishedMatches:()=>{
        return prisma.match.findMany({
            where:{
                status: "finished"
            },
            orderBy:{
                date:"desc"
            },
        })
    },
    // match details
    getMatchDetails:(id)=>{
        return prisma.match.findUnique({
            where:{id: Number(id)},
            include:{
                homeTeam:true,
                awayTeam:true,
                matchEvents:{
                    orderBy:{
                        minute:"asc"
                    }
                },
                stadium:true,
            }
        })
    },

    //match events
    getMatchEvents:(id)=>{
        return prisma.matchEvent.findMany({
            where: {
                matchId: Number(id)
            },
            orderBy: {
                minute: "asc"
            },
        })
    }

};