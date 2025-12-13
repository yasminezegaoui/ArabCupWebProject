import { prisma } from "../../../backend/src/config/db.js";

export const  getAllMatches= async()=>{
    const {data}= await apiClient.get('/matches');
    return data;
}

export const getMatchById= async(id)=>{
    const {data}= await apiClient.get('/matches/'+id);
    return data;
}   
export const getUpcomingMaches= async()=>{  
    const {data}= await apiClient.get('/matches/upcoming');
    return data;
}

export const getFinishedMatches= async()=>{
    const {data}= await apiClient.get('/matches/finished');
    return data;
}

export const getMatchDetails= async(id)=>{
    const {data}= await apiClient.get('/matches/details/'+id);
    return data;
}

export const getMatchEvents= async(id)=>{
    const {data}= await apiClient.get('/matches/'+id+'/events');
    return data;
}