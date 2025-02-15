import React, { useState } from 'react';
import SearchResultsList from '../components/SearchResultsList';
import { fetchStatlinesByPlayer } from '../HttpClient';
import PassingCharts from '../components/comparison charts/PassingCharts';
import RushingCharts from '../components/comparison charts/RushingCharts'
import ReceivingCharts from '../components/comparison charts/ReceivingCharts';

const ComparisonToolPage = () => {
    const [input1, setInput1] = useState('');
    const [results1, setResults1] = useState([]);
    const [input2, setInput2] = useState('');
    const [results2, setResults2] = useState([]);

    const [selectedPlayer1, setSelectedPlayer1] = useState({});
    const [selectedPlayer2, setSelectedPlayer2] = useState({});
    const [player1Statlines, setPlayer1Statlines] = useState([]);
    const [player2Statlines, setPlayer2Statlines] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");

    const fetchPlayerByName = async (playerName) => {
        try {
            console.log(`input1: ${playerName}`);
            const response = await fetch(
                `http://localhost:8080/players/search?playerName=${playerName}`
            );
            if (response.status === 204) return [];
            return await response.json();
        } catch (err) {
            console.error('Error fetching player by name:', err);
        }
    };

    const handleInput1Change = async (e) => {
        const playerName = e.target.value;
        setInput1(playerName);

        if (playerName && playerName.length > 1) {
            const response = await fetchPlayerByName(playerName);
            const seenPlayers = new Set();

            const players = response.filter((player) => {
                const playerKey = `${player.first_name} ${player.last_name} ${player.team.school} ${player.position}`;
                if (seenPlayers.has(playerKey)) return false;
                seenPlayers.add(playerKey);
                return true;
            });

            setResults1(players);
        } else {
            setResults1([]);
            setPlayer1Statlines([]);
            setSelectedPlayer1({});
        }
    };

    const handleInput2Change = async (e) => {
        const playerName = e.target.value;
        setInput2(playerName);

        if (playerName && playerName.length > 1) {
            const response = await fetchPlayerByName(playerName);
            const seenPlayers = new Set();

            const players = response.filter((player) => {
                const playerKey = `${player.first_name} ${player.last_name} ${player.team.school} ${player.position}`;
                if (seenPlayers.has(playerKey)) return false;
                seenPlayers.add(playerKey);
                return true;
            });

            setResults2(players);
        } else {
            setResults2([]);
            setPlayer2Statlines([]);
            setSelectedPlayer2({});
        }
    };

    const handleSelectPlayer1 = async (player) => {
        setSelectedPlayer1(player);
        setResults1([]);
        setInput1(`${player.first_name} ${player.last_name}`);

        const statlines = await fetchStatlinesByPlayer(player.player_id);
        setPlayer1Statlines(statlines);
    };

    const handleSelectPlayer2 = async (player) => {
        setSelectedPlayer2(player);
        setResults2([]);
        setInput2(`${player.first_name} ${player.last_name}`);

        const statlines = await fetchStatlinesByPlayer(player.player_id);
        setPlayer2Statlines(statlines);
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
    }

    return (
        <div className="p-6 bg-blue-200 min-h-screen">
            <div className="bg-gray-100 h-32 p-4 rounded">
                <h1 className="text-2xl font-bold mb-4">Compare Player Stats</h1>
                <div className="flex space-x-10">
                    <div>
                        <input
                            className="p-2 w-96"
                            placeholder="Search player 1"
                            value={input1}
                            onChange={handleInput1Change}
                        />
                        <SearchResultsList
                            players={results1}
                            handleSelect={handleSelectPlayer1}
                        />
                    </div>
                    <div>
                        <input
                            className="p-2 w-96"
                            placeholder="Search player 2"
                            value={input2}
                            onChange={handleInput2Change}
                        />
                        <SearchResultsList
                            players={results2}
                            handleSelect={handleSelectPlayer2}
                        />
                    </div>
                    <select
                        className="relative p-2 w-48 h-10 text-gray-700"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="passing">Passing</option>
                        <option value="rushing">Rushing</option>
                        <option value="receiving">Receiving</option>
                    </select>
                </div>
            </div>
            {selectedCategory == "passing" && (
                <PassingCharts 
                    player1Statlines={player1Statlines}
                    player2Statlines={player2Statlines}
                    player1={selectedPlayer1}
                    player2={selectedPlayer2}
                />
            )}
            {selectedCategory == "rushing" && (
                <RushingCharts 
                    player1Statlines={player1Statlines}
                    player2Statlines={player2Statlines}
                    player1={selectedPlayer1}
                    player2={selectedPlayer2}
                />
            )}
            {selectedCategory == "receiving" && (
                <ReceivingCharts
                    player1Statlines={player1Statlines}
                    player2Statlines={player2Statlines}
                    player1={selectedPlayer1}
                    player2={selectedPlayer2}
                />
            )}
        </div>
    );
};

export default ComparisonToolPage;