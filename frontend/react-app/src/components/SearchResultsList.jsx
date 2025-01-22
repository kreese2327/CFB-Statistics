import React from 'react';

const SearchResultsList = ({ players, handleSelect }) => {
    return (
        <div className="z-10 relative max-h-48 overflow-y-scroll border border-gray-300">
            {players.map((player) => (
                <div
                    key={player.player_id}
                    className="bg-white pl-2 pb-2 hover:bg-gray-200 hover:cursor-pointer"
                    onClick={() => handleSelect(player)}
                >
                    {player.first_name} {player.last_name} - {player.team.school} {player.position}
                </div>
            ))}
        </div>
    );
};

export default SearchResultsList;