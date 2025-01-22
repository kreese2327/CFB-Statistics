package com.reese.cfb_statistics.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reese.cfb_statistics.Entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {
}
