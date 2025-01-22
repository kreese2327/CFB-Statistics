package com.reese.cfb_statistics.Service;

import org.springframework.stereotype.Service;

import com.reese.cfb_statistics.Entity.Game;
import com.reese.cfb_statistics.Repository.GameRepository;

import java.util.List;

@Service
public class GameService {
    private GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }
}
