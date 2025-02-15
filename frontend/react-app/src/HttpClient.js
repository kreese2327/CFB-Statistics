const BASE_URL = "http://localhost:8080";

export const fetchPlayersByTeam = async (teamId) => {
    const response = await fetch(`${BASE_URL}/teams/${teamId}/players`);
    if (response.status == 204) return [];
    if (!response.ok) throw new Error(`HTTP error fetching players by team - status: ${response.status}`);
    return await response.json();
}

export const fetchStatlinesByTeam = async (teamId) => {
    const response = await fetch(`${BASE_URL}/teams/${teamId}/offense-statlines`);
    if (response.status == 204) return [];
    if (!response.ok) throw new Error(`HTTP error fetching statlines by team - status: ${response.status}`);
    return await response.json();
}

export const fetchStatlinesByPlayer = async (playerId) => {
    const response = await fetch(`${BASE_URL}/players/${playerId}/offense-statlines`);
    if (response.status == 204) return [];
    if (!response.ok) throw new Error(`HTTP error fetching statlines by player - status: ${response.status}`);
    return await response.json();
}

export const fetchTeamsByConference = async (conference) => {
    const response = await fetch(`${BASE_URL}/teams/${conference}`);
    if (response.status == 204) return [];
    if (!response.ok) throw new Error(`HTTP error fetching teams by conference - status: ${response.status}`);
    return await response.json();
}