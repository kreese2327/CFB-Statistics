import React, { useState } from "react";
import ConferenceDropdown from "../components/ConferenceDropdown";
import TeamDropdown from "../components/TeamDropdown";
import PlayerBioList from "../components/PlayerBioList";
import { fetchTeamsByConference, fetchPlayersByTeam } from "../ApiService";

const PlayerBiosPage = () => {
    
    const [selectedConference, setSelectedConference] = useState("");
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

    const handleFetchTeams = async (conference) => {
        try {
            const response = await fetchTeamsByConference(conference);
            setTeams(response);
        } catch (err) {
            setError("Failed to fetch teams.");
            console.error("Error fetching teams: ", err);
        }
    };

    const handleFetchPlayers = async (team) => {
        try {
            const response = await fetchPlayersByTeam(team);
            setPlayers(response);
        } catch (err) {
            setError("Failed to fetch players.");
            console.error("Error fetching players: ", err);
        }
    };

    return (
        <div className="p-6 bg-blue-200 min-h-screen">
            <div className="bg-gray-100 p-4 rounded">
                <h1 className="text-2xl font-bold mb-4 ml-4">Players</h1>
                <div className="flex">
                    <ConferenceDropdown
                        selectedConference={selectedConference}
                        onConferenceChange={(conference) => {
                            setSelectedConference(conference);
                            setTeams([]);
                            setSelectedTeam("");
                            setPlayers([]);
                            handleFetchTeams(conference);
                        }}
                    />
                    <TeamDropdown
                        teams={teams}
                        selectedTeam={selectedTeam}
                        onTeamChange={(team) => {
                            setSelectedTeam(team);
                            setPlayers([]);
                            handleFetchPlayers(team);
                        }}
                        disabled={!teams.length}
                    />
                </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <PlayerBioList players={players} />
        </div>
    );
};

export default PlayerBiosPage;