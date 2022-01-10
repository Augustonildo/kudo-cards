const service = require('../../src/users/service');
describe('kudos service', () => {
    const userService = service.usersService()
    it('Should return Login Successfully message', () => {
        const successfullyLoginResponse = userService.succesfullyLogin();
        expect(successfullyLoginResponse.message).toBe('Login Successfully');
    });
    it('Should parse data to aws format', () => {
        const user =  {
            name: 'Teste',
            email: 'teste@email.com',
            password: 'teste senha'
        };
        const awsUserFormat = userService.parseUserDataToAwsFormat(user)
        expect(awsUserFormat.Username).toBe(user.email);
        expect(awsUserFormat.Password).toBe(user.password);
        expect(awsUserFormat.UserAttributes[0].Name).toBe('name');
        expect(awsUserFormat.UserAttributes[0].Value).toBe(user.name);
    });
})