// @ts-check

import Bottle from 'bottlejs';
import _ from 'lodash';
import services from './services/index.js';
import entities from './entities/index.js';
import repositories from './repositories/index.js';
import generateValidator from './lib/validator.js';

export default () => {
  const bottle = new Bottle();
  bottle.factory('repositories', () => {
    const result = Object.keys(repositories).reduce((acc, repoName) => (
      { ...acc, [_.lowerFirst(repoName)]: new repositories[repoName]() }
    ), {});
    return result;
  });

  bottle.factory('entities', () => entities);

  // BEGIN (write your solution here)
  bottle.factory('validate', generateValidator);

  bottle.factory('services', (container) => {
    const result = Object.keys(services).reduce((acc, serviceName) => {
      const service = new services[serviceName](container);
      return { ...acc, [_.lowerFirst(serviceName)]: service };
    }, {});
    return result;
  });

  return bottle.container;
  // END
};
