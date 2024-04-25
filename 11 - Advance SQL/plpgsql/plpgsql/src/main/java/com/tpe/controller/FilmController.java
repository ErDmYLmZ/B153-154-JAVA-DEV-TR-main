package com.tpe.controller;

import com.tpe.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/film")
public class FilmController {

    @Autowired
    private FilmService filmService;

    @GetMapping
    public String getFilmCount(){
        String numberOfFilm=filmService.getFilmCount();
        return "Film tablosundaki film sayisi :"+numberOfFilm;
    }
}
