const repository = require('./repository');

module.exports.usersService = () => {
  const getAtrributeValue = (attributes, attrToGet) => attributes.find(attr => attr.Name === attrToGet)?.Value;

  const formatUsersData = (users) => users.map(user => ({
      email: getAtrributeValue(user.Attributes, 'email'),
      name:  getAtrributeValue(user.Attributes, 'name')
  }));

  return {
    getUsers: async () => {
      const users = await repository.usersRepository().getUsers();
      return formatUsersData(users);
    },
  };
};
