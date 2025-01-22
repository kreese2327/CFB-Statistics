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
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("game_id")
    @Column(name = "game_id")
    private int gameId;

    @JsonProperty("season")
    @Column(name = "season")
    private int season;

    @JsonProperty("week")
    @Column(name = "week")
    private int week;

    @ManyToOne
    @JsonProperty("home_team")
    @JoinColumn(name = "home_team", referencedColumnName = "team_id")
    private Team homeTeam;

    @ManyToOne
    @JsonProperty("away_team")
    @JoinColumn(name = "away_team", referencedColumnName = "team_id")
    private Team awayTeam;

    /***** Constructors *****/
    
    public Game() {}


    /****** Getters ******/

    public int getGameId() {
        return gameId;
    }

    public int getSeason() {
        return season;
    }

    public int getWeek() {
        return week;
    }

    public Team getHomeTeam() {
        return homeTeam;
    }

    public Team getAwayTeam() {
        return awayTeam;
    }
    
}
