package com.reese.cfb_statistics.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "player")
public class Player {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("player_id")
    @Column(name = "player_id")
    private int playerId;

    @ManyToOne
    @JoinColumn(name = "team_id", referencedColumnName = "team_id")
    private Team team;

    @JsonProperty("first_name")
    @Column(name = "first_name")
    private String firstName;

    @JsonProperty("last_name")
    @Column(name = "last_name")
    private String lastName;

    @JsonProperty("position")
    @Column(name = "position")
    private String position;

    @JsonProperty("height")
    @Column(name = "height")
    private Integer height;

    @JsonProperty("weight")
    @Column(name = "weight")
    private Integer weight;

    @JsonProperty("jersey")
    @Column(name = "jersey")
    private Integer jersey;

    @JsonProperty("home_city")
    @Column(name = "home_city")
    private String homeCity;

    @JsonProperty("home_state")
    @Column(name = "home_state")
    private String homeState;

    @JsonProperty("home_country")
    @Column(name = "home_country")
    private String homeCountry;

    @JsonProperty("year")
    @Column(name = "year")
    private Integer year;


    /***** Constructors *****/
    
    public Player() {}


    /***** Getters *****/

    public int getPlayerId() {
        return playerId;
    }

    public Team getTeam() {
        return team;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPosition() {
        return position;
    }

    public int getHeight() {
        return height;
    }

    public int getWeight() {
        return weight;
    }

    public int getJersey() {
        return jersey;
    }

    public String getHomeCity() {
        return homeCity;
    }

    public String getHomeState() {
        return homeState;
    }

    public String getHomeCountry() {
        return homeCountry;
    }

    public int getYear() {
        return year;
    }

}
