// @ts-check

import FilmScreening from './FilmScreeningRepository.js';
import Film from './FilmRepository.js';
import Price from './PriceRepository.js';
import CinemaHall from './CinemaHallRepository.js';
import User from './UserRepository.js';
import FilmScreeningTicket from './FilmScreening/TicketRepository.js';
import CapitalTransaction from './CapitalTransactionRepository.js';

export default {
  Price,
  CapitalTransaction,
  FilmScreening,
  FilmScreeningTicket,
  Film,
  CinemaHall,
  User,
};
