
const PlayerBioItem = ({ player }) => {

    return (
        <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{player.team.school}</td>
            <td className="border border-gray-300 px-4 py-2">{player.first_name}</td>
            <td className="border border-gray-300 px-4 py-2">{player.last_name}</td>
            <td className="border border-gray-300 px-4 py-2">{player.position}</td>
            <td className="border border-gray-300 px-4 py-2">{player.height}</td>
            <td className="border border-gray-300 px-4 py-2">{player.weight}</td>
            <td className="border border-gray-300 px-4 py-2">{player.jersey}</td>
            <td className="border border-gray-300 px-4 py-2">{player.home_city}</td>
            <td className="border border-gray-300 px-4 py-2">{player.home_state}</td>
            <td className="border border-gray-300 px-4 py-2">{player.home_country}</td>
            <td className="border border-gray-300 px-4 py-2">{player.year}</td>
        </tr>
    )
}
export default PlayerBioItem;