import PlayerStatsItem from './PlayerStatsItem';

const PlayerStatsList = ({ statlines }) => {

    return (
        <div className="overflow-auto max-h-[65vh]">
            <table className="table-auto w-full bg-white shadow-lg">
                <thead className="sticky top-0 bg-gray-200 text-sm">
                    <tr>
                        <th className="text-left px-4 py-2">Name</th>
                        <th className="text-left px-4 py-2">Game</th>
                        <th className="text-left px-4 py-2">Week</th>
                        <th className="text-left px-4 py-2">Pass Complete</th>
                        <th className="text-left px-4 py-2">Pass Att</th>
                        <th className="text-left px-4 py-2">Pass YDS</th>
                        <th className="text-left px-4 py-2">Pass TDs</th>
                        <th className="text-left px-4 py-2">Ints</th>
                        <th className="text-left px-4 py-2">Rush Att</th>
                        <th className="text-left px-4 py-2">Rush YDS</th>
                        <th className="text-left px-4 py-2">Rush TDs</th>
                        <th className="text-left px-4 py-2">Receptions</th>
                        <th className="text-left px-4 py-2">Rec YDS</th>
                        <th className="text-left px-4 py-2">Rec TDs</th>
                        <th className="text-left px-4 py-2">Fumbles</th>
                        <th className="text-left px-4 py-2">Fantasy Pts</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                
                    {/* map and filter the statlines here */}
                    {statlines.sort((a, b) => a.game.week - b.game.week).map((statline) => (
                        <PlayerStatsItem key={statline.offense_statline_id} statline={ statline} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default PlayerStatsList;