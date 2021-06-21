import cinemaManager from '../../src/lesson5/index.js';

describe('UserService', () => {
  let service;
  beforeEach(() => {
    const app = cinemaManager();
    service = app.services.userService;
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
