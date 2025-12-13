import apiClient from '../utils/apiClient';

export const getAllTeams = async() => {
    const {data}= await apiClient.get('/teams');
    return data;
};

export const getTeamById = async(id)=>{
    const {data}=await apiClient.get('/teams/'+id);
    return data;
}

export const getTeamPlayers= async (id) => {
    const {data}= await apiClient.get(`/teams/${id}/players`);
    return data;
}

export const getTeamMaches= async (id) => {
    const {data}= await apiClient.get(`/teams/${id}/matches`);
    return data;
}
