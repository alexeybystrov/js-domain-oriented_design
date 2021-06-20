import ApplicationService from './ApplicationService.js';
import { FilmScreeningTicket } from '../entities/index.js';

export default class MoneyService extends ApplicationService {
  // BEGIN (write your solution here)
  buyTicket(userId, filmScreeningId, place) {
    const user = this.UserRepository.find(userId);
    const screening = this.FilmScreeningRepository.find(filmScreeningId);

    const ticket = new FilmScreeningTicket(screening, user, place);
    const errors = this.validate(ticket);
    if (!errors) {
      this.FilmScreeningTicketRepository.save(ticket);
    }
    return [ticket, errors];
  }
  // END
}
