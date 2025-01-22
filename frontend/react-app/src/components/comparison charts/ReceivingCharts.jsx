import { AreaChart, Area, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ReceivingCharts = ({player1Statlines, player2Statlines, player1, player2}) => {

    const PLAYER1_COLOR = "#8884d8";
    const PLAYER2_COLOR = "#ff77aa";
    const PLAYER1_NAME = `${player1.first_name} ${player1.last_name}`;
    const PLAYER2_NAME = `${player2.first_name} ${player2.last_name}`;
    const CHART_MARGIN = { top: 20, right: 20, bottom: 0, left: 0 };

    const getChartData = (statKey) => {
        let data = [];
        const maxLength = Math.max(player1Statlines.length, player2Statlines.length);
        for (let i = 0; i < maxLength; i++) {
            data.push({
                game: `Game ${i + 1}`,
                player1: player1Statlines[i]?.[statKey],
                player2: player2Statlines[i]?.[statKey],
            });
        }
        return data;
    }

    const recYdsData = getChartData("rec_yds");
    const recTdsData = getChartData("rec_tds");
    const receptionsData = getChartData("receptions");
    const fumblesData = getChartData("fum_lost");

    const ChartGradients = () => (
        <>
        <linearGradient id="colorPlayer1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={PLAYER1_COLOR} stopOpacity={0.8} />
            <stop offset="95%" stopColor={PLAYER1_COLOR} stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPlayer2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={PLAYER2_COLOR} stopOpacity={0.8} />
            <stop offset="95%" stopColor={PLAYER2_COLOR} stopOpacity={0} />
        </linearGradient>
        </>
    );

    return (
        <div>
            {(player1Statlines.length > 0 || player2Statlines.length > 0) && (
                <>
                <div className="flex justify-center space-x-2 h-96 mt-2">

                    {/* Receiving Yards Chart */}
                    <div className="flex flex-col justify-center items-center bg-white w-full">
                        <h3 className="text-lg text-gray-500">Receiving Yards</h3>
                        <AreaChart width={700} height={350} data={recYdsData} margin={CHART_MARGIN} >
                            <defs><ChartGradients /></defs>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="game" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {player1Statlines.length > 0 && (
                                <Area 
                                    type="monotone" 
                                    dataKey="player1" 
                                    stroke={PLAYER1_COLOR} 
                                    fillOpacity={1} 
                                    fill="url(#colorPlayer1)" 
                                    name={PLAYER1_NAME} 
                                />
                            )}
                            {player2Statlines.length > 0 && (
                                <Area 
                                    type="monotone" 
                                    dataKey="player2" 
                                    stroke={PLAYER2_COLOR} 
                                    fillOpacity={1} 
                                    fill="url(#colorPlayer2)" 
                                    name={PLAYER2_NAME}
                                />
                            )}
                        </AreaChart>
                    </div>

                    {/* Receiving Touchdowns Chart */}
                    <div className="flex flex-col justify-center items-center bg-white w-full">
                        <h3 className="text-lg text-gray-500">Receiving Touchdowns</h3>
                        <BarChart width={700} height={350} data={recTdsData} margin={CHART_MARGIN} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="game" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            {player1Statlines.length > 0 && (
                                <Bar dataKey="player1" fill={PLAYER1_COLOR} name={PLAYER1_NAME} />
                            )}
                            {player2Statlines.length > 0 && (
                                <Bar dataKey="player2" fill={PLAYER2_COLOR} name={PLAYER2_NAME}
                                />
                            )}
                        </BarChart>
                    </div>
                </div>

                <div className="flex justify-center space-x-2 h-96 mt-2">
                    
                    {/* Fumbles Chart */}
                    <div className="flex flex-col justify-center items-center bg-white w-full">
                        <h3 className="text-lg text-gray-500">Fumbles</h3>
                        <BarChart width={700} height={350} data={fumblesData} margin={CHART_MARGIN} >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="game" />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            {player1Statlines.length > 0 && (
                                <Bar dataKey="player1" fill={PLAYER1_COLOR} name={PLAYER1_NAME} />
                            )}
                            {player2Statlines.length > 0 && (
                                <Bar dataKey="player2" fill={PLAYER2_COLOR} name={PLAYER2_NAME} />
                            )}
                        </BarChart>
                    </div>

                    {/* Receptions Chart */}
                    <div className="flex flex-col justify-center items-center bg-white w-full">
                        <h3 className="text-lg text-gray-500">Receptions</h3>
                        <AreaChart width={700} height={350} data={receptionsData} margin={CHART_MARGIN} >
                            <defs><ChartGradients /></defs>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="game" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {player1Statlines.length > 0 && (
                                <Area 
                                    type="monotone" 
                                    dataKey="player1" 
                                    stroke={PLAYER1_COLOR} 
                                    fillOpacity={1} 
                                    fill="url(#colorPlayer1)" 
                                    name={PLAYER1_NAME} 
                                />
                            )}
                            {player2Statlines.length > 0 && (
                                <Area 
                                    type="monotone" 
                                    dataKey="player2" 
                                    stroke={PLAYER2_COLOR} 
                                    fillOpacity={1} 
                                    fill="url(#colorPlayer2)" 
                                    name={PLAYER2_NAME}
                                />
                            )}
                        </AreaChart>
                    </div>
                </div>
                </>
            )}
        </div>
    )
}
export default ReceivingCharts;