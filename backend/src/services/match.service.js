import {prisma}  from "../config/db.js";

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
                status: "UPCOMING"
            },
            orderBy:{
                date:"asc"
            },
            include: {
                homeTeam: true,
                awayTeam: true,
            }
        })

    },
    // finished matches
    getFinishedMatches:()=>{
        return prisma.match.findMany({
            where:{
                status: "FINISHED"
            },
            orderBy:{
                date:"desc"
            },
            include: {
                homeTeam: true,
                awayTeam: true,
            }
        })
    },
    // match details
    getMatchDetails:(id)=>{
        return prisma.match.findUnique({
            where:{id: Number(id)   },
            include:{
                homeTeam:true,
                awayTeam:true,
                events:{
                    orderBy:{
                        minute:"asc"
                    }
                },
                //stadium:true,   STADUIM MACHI RELATIONN!!
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