package com.reese.cfb_statistics.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reese.cfb_statistics.Entity.OffStatline;

@Repository
public interface OffStatlineRepository extends JpaRepository<OffStatline, Integer> {
    
    List<OffStatline> findByPlayer_Team_TeamId(int teamId);
    List<OffStatline> findByPlayer_PlayerId(int playerId);
    Optional<OffStatline> findByPlayer_PlayerIdAndGame_GameId(int playerId, int gameId);
}
