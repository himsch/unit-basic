const UserService = require('../user_service');
const UserClient = require('../user_client');
jest.mock('../user_client');
describe('user', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    }
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('call login() on UserClient when tries to login', async () => {
    await userService.login('adsf', '1234');

    expect(login).toHaveBeenCalledTimes(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('adsf', '1234');
    await userService.login('adsf', '1234');

    expect(login).toHaveBeenCalledTimes(1);
  });
});