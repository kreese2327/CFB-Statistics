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
@Table(name = "offense_statline")
public class OffStatline {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("offense_statline_id")
    @Column(name = "offense_statline_id")
    private int offenseStatlineId;

    @ManyToOne
    @JoinColumn(name = "player_id", referencedColumnName = "player_id")
    private Player player;

    @ManyToOne
    @JoinColumn(name = "game_id", referencedColumnName = "game_id")
    private Game game;

    @JsonProperty("pass_attempts")
    @Column(name = "pass_attempts")
    private int passAttempts;

    @JsonProperty("pass_complete")
    @Column(name = "pass_complete")
    private int passComplete;

    @JsonProperty("pass_yds")
    @Column(name = "pass_yds")
    private double passYds;

    @JsonProperty("pass_tds")
    @Column(name = "pass_tds")
    private int passTds;

    @JsonProperty("interceptions")
    @Column(name = "interceptions")
    private int interceptions;

    @JsonProperty("rush_attempts")
    @Column(name = "rush_attempts")
    private int rushAttempts;

    @JsonProperty("rush_yds")
    @Column(name = "rush_yds")
    private double rushYds;

    @JsonProperty("rush_tds")
    @Column(name = "rush_tds")
    private int rushTds;

    @JsonProperty("receptions")
    @Column(name = "receptions")
    private int receptions;

    @JsonProperty("rec_yds")
    @Column(name = "rec_yds")
    private double recYds;

    @JsonProperty("rec_tds")
    @Column(name = "rec_tds")
    private int recTds;

    @JsonProperty("fum_lost")
    @Column(name = "fum_lost")
    private int fumLost;

    @JsonProperty("pr_td")
    @Column(name = "pr_td")
    private int prTd;

    @JsonProperty("kr_td")
    @Column(name = "kr_td")
    private int krTd;


    /***** Constructors *****/

    public OffStatline() {}

    public OffStatline(Player player, Game game) {
        this.player = player;
        this.game = game;
    }


    /***** Getters *****/

    public int getOffenseStatlineId() {
        return this.offenseStatlineId;
    }

    public Player getPlayer() {
        return player;
    }

    public Game getGame() {
        return game;
    }

    public int getPassAttempts() {
        return passAttempts;
    }

    public int getPassComplete() {
        return passComplete;
    }

    public double getPassYds() {
        return passYds;
    }

    public int getPassTds() {
        return passTds;
    }

    public int getInterceptions() {
        return interceptions;
    }

    public int getRushAttempts() {
        return rushAttempts;
    }

    public double getRushYds() {
        return rushYds;
    }

    public int getRushTds() {
        return rushTds;
    }

    public int getReceptions() {
        return receptions;
    }

    public double getRecYds() {
        return recYds;
    }

    public int getRecTds() {
        return recTds;
    }

    public int getFumLost() {
        return fumLost;
    }

    public int getPrTd() {
        return prTd;
    }

    public int getKrTd() {
        return krTd;
    }

}
