import { prisma } from "../../../backend/src/config/db.js";

export const getLeaderboard= async()=>{
    const {data}= await apiClient.get('/leaderboard');
    return data;
}
export const getGroup= async(groupName)=>{
    const {data}= await apiClient.get('/leaderboard/group/'+groupName);
    return data;
}