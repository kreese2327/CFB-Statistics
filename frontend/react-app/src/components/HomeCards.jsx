import { Link } from 'react-router-dom';
import Card from './Card'

const HomeCards = () => {

    return (
        <>
        <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
                <h2 className="text-2xl font-bold">View Player Statistics</h2>
                <p className="mt-2 mb-4">See all player statistics and game logs for the 2024 season</p>
                <Link to="/player-stats"
                    className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:text-blue-200 transition duration-500"
                    >Player Stats
                </Link>
            </Card>
            <Card>
                <h2 className="text-2xl font-bold">View Player Information</h2>
                <p className="mt-2 mb-4">See player bios and active team rosters</p>
                <Link to="/player-bios"
                    className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:text-blue-200 transition duration-500"
                    >Player Bios
                </Link>
            </Card>
            <Card>
                <h2 className="text-2xl font-bold">Compare Players Side By Side</h2>
                <p className="mt-2 mb-4">See players' game trends for the 2024 season and compare with others</p>
                <Link to="/comparison-tool"
                    className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:text-blue-200 transition duration-500"
                    >Compare
                </Link>
            </Card>
            </div>
        </div>
        </section>
        </>
    )
}
export default HomeCards;