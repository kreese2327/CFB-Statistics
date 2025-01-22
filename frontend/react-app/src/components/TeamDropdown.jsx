import React from "react";

const TeamDropdown = ({ teams, selectedTeam, onTeamChange, disabled }) => {
    
    return (
        <select
            className="block mb-4 mr-5 p-2"
            value={selectedTeam}
            onChange={(e) => onTeamChange(e.target.value)}
            disabled={disabled}
        >
            <option value="" disabled>Select Team</option>
            {teams.map((team) => (
                <option key={team.team_id} value={team.team_id}>
                    {team.school}
                </option>
            ))}
        </select>
    );
};

export default TeamDropdown;