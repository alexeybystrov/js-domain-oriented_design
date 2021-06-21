// @ts-check

import { v4 as uuid } from 'uuid';
import { yup } from '../lib/validator.js';
import ApplicationEntity from './ApplicationEntity.js';

export default class CapitalTransaction extends ApplicationEntity {
  // BEGIN (write your solution here)
  static schema = yup.object({
    ticket: yup.mixed().required(),
    cost: yup.number().strict().required(),
  });

  constructor(ticket) {
    super();
    this.id = uuid();
    this.ticket = ticket;
    this.cost = ticket.cost;
    this.createdAt = new Date();
  }
  // END
}
