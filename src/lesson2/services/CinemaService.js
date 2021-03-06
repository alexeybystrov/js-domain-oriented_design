// @ts-check

import ApplicationService from './ApplicationService.js';
import { Film, CinemaHall, FilmScreening } from '../entities/index.js';

export default class CinemaService extends ApplicationService {
  // BEGIN (write your solution here)
  createCinemaHall(name, rows, cols) {
    const cinemaHall = new CinemaHall(name, rows, cols);
    this.CinemaHallRepository.save(cinemaHall);
    return cinemaHall;
  }

  createFilmScreening(filmId, cinemaHallId, time) {
    const film = this.FilmRepository.find(filmId);
    const hall = this.CinemaHallRepository.find(cinemaHallId);
    const filmScreening = new FilmScreening(film, hall, time);
    this.FilmScreeningRepository.save(filmScreening);
    return filmScreening;
  }
  // END

  createFilm(name, duration) {
    const film = new Film(name, duration);
    this.FilmRepository.save(film);
    return film;
  }
}
