package com.reese.cfb_statistics.Service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.reese.cfb_statistics.Entity.Player;
import com.reese.cfb_statistics.Repository.PlayerRepository;

@Service
public class PlayerService {
    
    private PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public List<Player> getPlayersByTeamId(int teamId) {
        return playerRepository.findByTeam_TeamId(teamId);
    }

    public List<Player> getPlayersByPlayerName(String name) {
        String[] nameParts = name.trim().split("\\s+");
        if (nameParts.length == 1) {
            return playerRepository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(name, name);
        }
        
        String firstName = nameParts[0];
        String lastName = nameParts[1];
        if (nameParts.length == 3 && Arrays.asList("Jr", "Jr.", "Sr", "Sr.", "II", "III", "IV", "V").contains(nameParts[2])) {
            lastName += " " + nameParts[2];
        }
        return playerRepository.findByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(firstName, lastName);
    }

}

