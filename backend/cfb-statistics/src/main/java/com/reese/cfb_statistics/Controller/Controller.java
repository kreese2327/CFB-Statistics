package com.reese.cfb_statistics.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.reese.cfb_statistics.Entity.*;
import com.reese.cfb_statistics.Service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {
    
    private TeamService teamService;
    private PlayerService playerService;
    private GameService gameService;
    private OffStatlineService offStatlineService;

    public Controller() {}

    @Autowired
    public void setTeamService(TeamService teamService) {
        this.teamService = teamService;
    }

    @Autowired
    public void setPlayerService(PlayerService playerService) {
        this.playerService = playerService;
    }

    @Autowired
    public void setGameService(GameService gameService) {
        this.gameService = gameService;
    }

    @Autowired
    public void setOffStatlineService(OffStatlineService offStatlineService) {
        this.offStatlineService = offStatlineService;
    }

    @GetMapping("/teams/{team_id}/players")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Player>> getPlayersByTeamId(@PathVariable int team_id) {
        List<Player> players = playerService.getPlayersByTeamId(team_id);
        if (players == null || players.isEmpty()) return ResponseEntity.noContent().build();

        return ResponseEntity.ok(players);

    }

    @GetMapping("/teams/{team_id}/offense-statlines")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<OffStatline>> getOffenseStatlinesByTeamId(@PathVariable int team_id) {
        List<OffStatline> statlines = offStatlineService.getOffStatlinesByTeamId(team_id);
        if (statlines == null || statlines.isEmpty()) return ResponseEntity.noContent().build();

        return ResponseEntity.ok(statlines);
    }

    @GetMapping("/teams/{conference}")
    public ResponseEntity<List<Team>> getTeamsByConference(@PathVariable String conference) {
        List<Team> teams = teamService.getTeamsByConference(conference);
        if (teams == null || teams.isEmpty()) return ResponseEntity.noContent().build();
        
        return ResponseEntity.ok(teams);
    }

    @GetMapping("/players/{player_id}/offense-statlines")
    public ResponseEntity<List<OffStatline>> getOffStatlinesByPlayerId(@PathVariable int player_id) {
        List<OffStatline> offStatlines = offStatlineService.getOffStatlinesByPlayerId(player_id);
        if (offStatlines == null || offStatlines.isEmpty()) return ResponseEntity.noContent().build();

        return ResponseEntity.ok(offStatlines);
    }

    @GetMapping("/players/search")
    public ResponseEntity<List<Player>> getPlayersByPlayerName(@RequestParam String playerName) {
        List<Player> players = playerService.getPlayersByPlayerName(playerName);
        if (players == null || players.isEmpty()) return ResponseEntity.noContent().build();

        return ResponseEntity.ok(players);
    }


}