import React, { useState } from 'react';
import PlayerStatsList from '../components/PlayerStatsList.jsx'
import TeamDropdown from '../components/TeamDropdown.jsx';
import ConferenceDropdown from '../components/ConferenceDropdown.jsx';
import { fetchStatlinesByPlayer, fetchStatlinesByTeam, fetchPlayersByTeam, fetchTeamsByConference } from '../ApiService';

const PlayerStatsPage = () => {

    const [selectedConference, setSelectedConference] = useState("");
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [statlines, setStatlines] = useState([]);
    const [error, setError] = useState(null);

    const handleFetchTeams = async (conference) => {
        try  {
            const response = await fetchTeamsByConference(conference);
            setTeams(response);
        } catch (err) {
            setError("Failed to fetch teams.");
            console.error("Error fetching teams: ", err);
        }
    };

    const handleFetchPlayers = async (teamId) => {
        try {
            const response = await fetchPlayersByTeam(teamId);
            const offensivePositions = ["QB", "WR", "RB", "TE"];
            const filteredPlayers = response.filter(player =>
                offensivePositions.includes(player.position)
            );
            setPlayers(filteredPlayers);
        } catch (err) {
            setError("Failed to fetch players.");
            console.error("Error fetching players: ", err);
        }
    }

    const handleFetchStatlinesByTeam = async (teamId) => {
        try {
            const response = await fetchStatlinesByTeam(teamId);
            setStatlines(response);
        } catch (err) {
            setError("Failed to fetch statlines.");
            console.error("Error fetching statlines: ", err);
        }
    }

    const handleFetchStatlinesByPlayer = async (playerId) => {
        try {
            const response = await fetchStatlinesByPlayer(playerId);
            setStatlines(response);
        } catch (err) {
            setError("Failed to fetch statlines.");
            console.error("Error fetching statlines: ", err);
        }
    }

    const handlePlayerChange = (e) => {
        const playerId = e.target.value;
        if (playerId) {
            setSelectedPlayer(playerId);
            handleFetchStatlinesByPlayer(playerId);
        }
    }
    

    return (
        <div className="p-6 bg-blue-200 h-[91vh]">
            <div className="bg-gray-100 p-4 rounded">
                <h1 className="text-2xl font-bold mb-4 ml-4">Offense Player Stats</h1>
                <div className="flex">
                    {/* Dropdown for Conference */}
                    <ConferenceDropdown 
                        selectedConference={selectedConference}
                        onConferenceChange={(conference) => {
                            setSelectedConference(conference);
                            setTeams([]);
                            setSelectedTeam("");
                            setPlayers([]);
                            setSelectedPlayer("");
                            setStatlines([]);
                            handleFetchTeams(conference);
                        }}
                    />

                    {/* Dropdown for Teams */}
                    <TeamDropdown 
                        teams={teams}
                        selectedTeam={selectedTeam}
                        onTeamChange={(team) => {
                            setSelectedTeam(team);
                            setPlayers([]);
                            setSelectedPlayer("");
                            setStatlines([]);
                            handleFetchPlayers(team);
                            handleFetchStatlinesByTeam(team);
                        }}
                        disabled={!teams.length}
                    />

                    {/* Dropdown for Players */}
                    <select
                        className="block mb-4 p-2"
                        value={selectedPlayer}
                        onChange={handlePlayerChange}
                        disabled={!players.length}
                    >
                        <option value="" disabled>Select Player</option>
                        {players.map((player) => (
                            <option key={player.player_id} value={player.player_id}>
                                {player.first_name} {player.last_name}
                            </option>
                        ))}
                    </select>
                </div>
                
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <PlayerStatsList statlines={statlines} />
        </div>
    )
}
export default PlayerStatsPage;
