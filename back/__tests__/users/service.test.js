const service = require('../../src/users/service');
describe('kudos service', () => {
    const userService = service.usersService()
    it('Should return Login Successfully message', () => {
        const successfullyLoginResponse = userService.succesfullyLogin();
        expect(successfullyLoginResponse.message).toBe('Login Successfully');
    });
})