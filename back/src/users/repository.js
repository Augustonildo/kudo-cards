const AWS = require('aws-sdk');
const uuid = require('uuid');

module.exports.usersRepository = () => {
  const cognito = new AWS.CognitoIdentityServiceProvider({ region: 'us-east-1' });
  
  return {
    getUsers: async () => {
      const params = {
        UserPoolId: 'us-east-1_AF5l44Ear',
        AttributesToGet: [
          "email",
          "name"
        ],
        Limit: 0
      };
      const data = await cognito.listUsers(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else return data;           // successful response
      }).promise();
      return data.Users;
    }
  };
};
