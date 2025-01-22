package com.reese.cfb_statistics.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reese.cfb_statistics.Entity.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {
    
    Optional<Player> getByFirstNameAndLastNameAndTeam_School(String firstName, String lastName, String school);
    List<Player> findByTeam_TeamId(int teamId);
    List<Player> findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String firstName, String lastName);
    List<Player> findByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(String firstName, String lastName);
}
