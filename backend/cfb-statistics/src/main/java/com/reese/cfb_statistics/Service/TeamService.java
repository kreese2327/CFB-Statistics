package com.reese.cfb_statistics.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.reese.cfb_statistics.Entity.Team;
import com.reese.cfb_statistics.Repository.TeamRepository;

@Service
public class TeamService {
    
    private TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public List<Team> getTeamsByConference(String conference) {
        return teamRepository.findByConference(conference);
    }
}
