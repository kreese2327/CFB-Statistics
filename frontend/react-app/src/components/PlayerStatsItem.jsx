
const PlayerStatsItem = ({ statline }) => {
    
    let fantasyPts = (statline.pass_yds * .04) + (statline.pass_tds * 4) - (statline.interceptions * 2)
        + (statline.rush_yds * 0.1) + (statline.rush_tds * 6) + statline.receptions + (statline.rec_yds * 0.1) 
        + (statline.rec_tds * 6) - (statline.fum_lost * 2);

    return (
        <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{statline.player.first_name} {statline.player.last_name}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.game.home_team.school} vs {statline.game.away_team.school}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.game.week}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.pass_complete}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.pass_attempts}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.pass_yds}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.pass_tds}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.interceptions}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.rush_attempts}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.rush_yds}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.rush_tds}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.receptions}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.rec_yds}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.rec_tds}</td>
            <td className="border border-gray-300 px-4 py-2">{statline.fum_lost}</td>
            <td className="border border-gray-300 px-4 py-2">{parseFloat(fantasyPts.toFixed(2))}</td>
        </tr>
    )
}
export default PlayerStatsItem;