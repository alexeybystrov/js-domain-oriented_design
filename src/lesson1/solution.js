// @ts-check

import { Film, CinemaHall, FilmScreening } from './entities/index.js';

export default (filmName, duration, cinemaHallName, rows, cols, time) => {
  // BEGIN (write your solution here)
  const film = new Film(filmName, duration);
  const cinemaHall = new CinemaHall(cinemaHallName, rows, cols);
  const filmScreening = new FilmScreening(film, cinemaHall, time);
  // cinemaHall.addFilmScreening(filmScreening);

  return filmScreening;
  // END
};
