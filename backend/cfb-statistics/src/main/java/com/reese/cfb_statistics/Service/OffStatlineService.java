package com.reese.cfb_statistics.Service;

import org.springframework.stereotype.Service;

import com.reese.cfb_statistics.Entity.OffStatline;
import com.reese.cfb_statistics.Repository.OffStatlineRepository;

import java.util.List;

@Service
public class OffStatlineService {
    private OffStatlineRepository offStatlineRepository;

    public OffStatlineService(OffStatlineRepository offStatlineRepository) {
        this.offStatlineRepository = offStatlineRepository;
    }

    public List<OffStatline> getAllOffStatlines() {
        return offStatlineRepository.findAll();
    }

    public List<OffStatline> getOffStatlinesByTeamId(int teamId) {
        return offStatlineRepository.findByPlayer_Team_TeamId(teamId);
    }

    public List<OffStatline> getOffStatlinesByPlayerId(int playerId) {
        return offStatlineRepository.findByPlayer_PlayerId(playerId);
    }

}
