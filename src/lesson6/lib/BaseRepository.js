// @ts-check

import _ from 'lodash';

export default class BaseRepository {
  constructor() {
    this.data = [];
  }

  all() {
    return this.data;
  }

  find(id) {
    const result = this.data.find((entity) => entity.id === id);
    if (!result) {
      throw new Error('Entity not found');
    }
    return result;
  }

  findAllBy(params) {
    return _.filter(this.data, params);
  }

  findBy(params) {
    const result = this.findAllBy(params);
    return result.length > 0 ? result[0] : null;
  }

  save(entity) {
    const foundEntity = this.findBy(entity);
    if (foundEntity) {
      this.data = this.data.filter((e) => e.id !== foundEntity.id);
    }
    this.data.push(entity);
  }
}
