package com.reese.cfb_statistics.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "player_alias")
public class PlayerAlias {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("alias_id")
    @Column(name = "alias_id")
    private int aliasId;

    @ManyToOne
    @JsonProperty("player_id")
    @JoinColumn(name = "player_id", referencedColumnName = "player_id")
    private Player player;

    @JsonProperty("alias")
    @Column(name = "alias")
    private String alias;


    /***** Constructors *****/
    public PlayerAlias() {}

    
    /***** Getters *****/

    public int getAliasId() {
        return aliasId;
    }

    public Player getPlayer() {
        return player;
    }

    public String getAlias() {
        return alias;
    }
    
}
