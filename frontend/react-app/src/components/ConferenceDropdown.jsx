import React from "react";

const ConferenceDropdown = ({ selectedConference, onConferenceChange }) => {
    
    const conferences = ["ACC", "Big Ten", "Big 12", "SEC"];

    return (
        <select
            className="block mb-4 mr-5 p-2"
            value={selectedConference}
            onChange={(e) => onConferenceChange(e.target.value)}
        >
            <option value="" disabled>Select Conference</option>
            {conferences.map((conference) => (
                <option key={conference} value={conference}>
                    {conference}
                </option>
            ))}
        </select>
    );
};

export default ConferenceDropdown;