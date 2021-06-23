import cinemaManager from '../../src/lesson6/index.js';

describe('UserService', () => {
  let service;
  beforeEach(() => {
    const app = cinemaManager();
    service = app.services.user;
  });

  it('createUser', () => {
    const email = 'test@test.com';
    const [user] = service.createUser(email);
    const expected = {
      email,
    };
    expect(user).toMatchObject(expected);
  });
});
