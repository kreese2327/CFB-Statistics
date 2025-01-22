package com.reese.cfb_statistics.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reese.cfb_statistics.Entity.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {

    boolean existsBySchool(String school);
    List<Team> findByConference(String conference);
    Optional<Team> findBySchool(String school);
    
}