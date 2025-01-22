package com.reese.cfb_statistics.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "team")
public class Team {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("team_id")
    @Column(name = "team_id")
    private int teamId;

    @JsonProperty("school")
    @Column(name = "school")
    private String school;

    @JsonProperty("mascot")
    @Column(name = "mascot")
    private String mascot;

    @JsonProperty("abbreviation")
    @Column(name = "abbreviation")
    private String abbreviation;

    @JsonProperty("conference")
    @Column(name = "conference")
    private String conference;

    @JsonProperty("color")
    @Column(name = "color")
    private String color;

    @JsonProperty("alt_color")
    @Column(name = "alt_color")
    private String altColor;


    /***** Constructors *****/

    public Team() {}

    public Team(String school) {
        this.school = school;
    }

    
    /***** Getters *****/

    public int getTeamId() {
        return teamId;
    }

    public String getSchool() {
        return school;
    }

    public String getMascot() {
        return mascot;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public String getConference() {
        return conference;
    }

    public String getColor() {
        return color;
    }

    public String getAltColor() {
        return altColor;
    };
}

