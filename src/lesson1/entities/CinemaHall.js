// @ts-check

import { v4 as uuid } from 'uuid';

// BEGIN (write your solution here)
export default class CinemaHall {
  constructor(name, rows, cols) {
    this.id = uuid();
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.filmScreenings = [];
    this.createdAt = Date.now();
  }

  addFilmScreening(filmScreening) {
    this.filmScreenings.push(filmScreening);
  }
}
// END
