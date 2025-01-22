import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass = ({ isActive }) => isActive
        ? "text-blue-500 px-3 py-2"
        : "hover:text-blue-500 transition duration-500 px-3 py-2"

    return (
        <>
        <nav>
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              
                    <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                        <span className="hidden md:block text-2xl font-bold">CFB Statisitcs</span>
                    </NavLink>
                    <div className="flex space-x-2 font-bold">
                        <NavLink
                            to="/"
                            className={ linkClass }
                            >Home
                        </NavLink>
                        <NavLink
                            to="/player-bios"
                            className={ linkClass }
                            >Player Bios
                        </NavLink>
                        <NavLink
                            to="/player-stats"
                            className={ linkClass }
                            >Player Stats
                        </NavLink>
                        <NavLink
                            to="/comparison-tool"
                            className={ linkClass }
                            >Comparison Tool
                        </NavLink>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar;