import PlayerBioItem from "./PlayerBioItem";

const PlayerBioList = ({ players }) => {
    
    return (
        <div className="overflow-auto max-h-[65vh]">
            <table className="table-auto w-full bg-white shadow-lg">
                <thead className="sticky top-0 bg-gray-200 text-sm">
                    <tr>
                        <th className="text-left px-4 py-1">School</th>
                        <th className="text-left px-4 py-1">First Name</th>
                        <th className="text-left px-4 py-1">Last Name</th>
                        <th className="text-left px-4 py-1">Position</th>
                        <th className="text-left px-4 py-1">Height</th>
                        <th className="text-left px-4 py-1">Weight</th>
                        <th className="text-left px-4 py-1">Jersey</th>
                        <th className="text-left px-4 py-1">Home City</th>
                        <th className="text-left px-4 py-1">Home State</th>
                        <th className="text-left px-4 py-1">Home Country</th>
                        <th className="text-left px-4 py-1">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <PlayerBioItem key={player.player_id} player={player} />
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default PlayerBioList;