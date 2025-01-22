package com.reese.cfb_statistics.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.reese.cfb_statistics.Entity.Player;
import com.reese.cfb_statistics.Entity.PlayerAlias;

@Repository
public interface PlayerAliasRepository extends JpaRepository<PlayerAlias, Integer> {
    
    @Query("SELECT pa.player FROM PlayerAlias pa WHERE pa.alias = :alias")
    Player findPlayerByAlias(@Param("alias") String alias);
}