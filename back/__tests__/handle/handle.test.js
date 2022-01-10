const handleFunc = require('../../index');

const mockGetKudos = jest.fn()
const mockGetUsers = jest.fn()
jest.mock('../../src/kudos/service', () => ({
    kudosService: () => ({
        getKudos: mockGetKudos
    }),
    usersService: () => ({
        getUsers: mockGetUsers
    }),
}));

describe('Handle Func', () => {
    it('Should call getKudos', () => {
        handleFunc.handler({rawPath: '/kudos'})
        expect(mockGetKudos).toBeCalled()
    });
    it('Should call getUsers', () => {
        handleFunc.handler({rawPath: '/users'})
        expect(mockGetUsers).toBeCalled()
    });
});