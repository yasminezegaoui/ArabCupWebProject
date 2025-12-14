import { prisma } from "../../../backend/src/config/db.js";

export const getAllPlayers= async()=>{
    const {data}= await apiClient.get('/teams');
    return data;
}

export const getPlayerById= async(id)=>{
    const {data}= await apiClient.get('/teams/'+id);
    return data;
}

export const getPlayerByTeam= async(teamId)=>{
    const {data}= await apiClient.get('/teams/'+teamId+'/players');
    return data;
}

export const getPlayerByGoals= async(minGoals)=>{
    const {data}= await apiClient.get('/teams/goals/'+minGoals);
    return data;
}

export const getPlayerByPosition= async(position)=>{
    const {data}= await apiClient.get('/teams/position/'+position);
    return data;
}

export const searchPlayer= async(name)=>{
    const {data}= await apiClient.get('/teams/search/'+name);
    return data;
}
