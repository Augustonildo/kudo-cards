const repository = require('./repository');

module.exports.usersService = () => {
  const getAtrributeValue = (attributes, attrToGet) => attributes.find(attr => attr.Name === attrToGet)?.Value;

  const formatUsersData = users => users.map(user => ({
      email: getAtrributeValue(user.Attributes, 'email'),
      name:  getAtrributeValue(user.Attributes, 'name')
  }));

  const parseUserDataToAwsFormat = user => ({
    Username: user.email,
    Password: user.password,
    UserAttributes: [ 
        { 
          Name: "name",
          Value: user.name
        },
    ],
  });

  return {
    signUp: async (user) => {
      const response = await repository.usersRepository().signUp(parseUserDataToAwsFormat(user));
      return response;
    },
    getUsers: async () => {
      const users = await repository.usersRepository().getUsers();
      return formatUsersData(users);
    },
  };
};
