// @ts-check

import ApplicationService from './ApplicationService.js';

export default class MoneyService extends ApplicationService {
  createPrice(cinemaHallId, value) {
    const cinemaHall = this.repositories.cinemaHall.find(cinemaHallId);
    const price = new this.entities.Price(cinemaHall, value);
    const errors = this.validate(price);
    if (!errors) {
      this.repositories.price.save(price);
    }
    return [price, errors];
  }

  // BEGIN (write your solution here)
  createFilmScreening(filmId, cinemaHallId, time) {
    const film = this.repositories.film.find(filmId);
    const cinemaHall = this.repositories.cinemaHall.find(cinemaHallId);
    const price = this.repositories.price.findBy({ cinemaHall });
    const cost = price.calculateFor(time);
    const screening = new this.entities.FilmScreening(film, cinemaHall, time, cost);

    const errors = this.validate(screening);
    if (!errors) {
      this.repositories.filmScreening.save(screening);
    }
    return [screening, errors];
  }

  buyTicket(userId, filmScreeningId, place) {
    const user = this.repositories.user.find(userId);
    const screening = this.repositories.filmScreening.find(filmScreeningId);

    const ticket = new this.entities.FilmScreeningTicket(screening, user, place);
    const errors = this.validate(ticket);
    if (errors) {
      return [ticket, errors];
    }

    const capitalTransaction = new this.entities.CapitalTransaction(ticket);

    this.repositories.filmScreeningTicket.save(ticket);
    this.repositories.capitalTransaction.save(capitalTransaction);

    return [ticket, errors];
  }
  // END
}
