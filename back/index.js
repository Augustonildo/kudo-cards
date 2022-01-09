const kudosService = require('./src/kudos/service');
const usersService = require('./src/users/service');

const requestManager = (response) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: 200,
    body: JSON.stringify({ content: response }),
  };
};

const fnHandler = async (context, event) => {
  try {
    const func = FUNCTION_PATH[event.rawPath];
    return await func(event);
  } catch (ex) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Bad request ${ex}`,
      }),
    };
  }
};

const createKudoHandler = (event) => {
  const kudoData = JSON.parse(event.body);
  return Promise.resolve(kudosService.kudoService().createKudo(kudoData)).then((id) => {
    return requestManager({ ...JSON.parse(event.body), id });
  });
};

const getKudos = () => {
  return Promise.resolve(kudosService.kudoService().getKudos()).then((response) =>
    requestManager(response)
  );
};

const getUsers = () => {
  return Promise.resolve(usersService.usersService().getUsers()).then((response) =>
    requestManager(response)
  );
};

const signUpUser = (event) => {
  const userData = JSON.parse(event.body);
  return Promise.resolve(usersService.usersService().signUp(userData)).then((response) =>
    requestManager(response)
  );
};

const signIn = (event) => {
  const userData = JSON.parse(event.body);
  return Promise.resolve(usersService.usersService().signIn(userData)).then((response) =>
    requestManager(response)
  );
};

const FUNCTION_PATH = {
  '/kudo': createKudoHandler,
  '/kudos': getKudos,
  '/users': getUsers,
  '/user': signUpUser,
  '/sign-in': signIn,
};

module.exports.handler = async (event, context, callback) => {
  const response = await fnHandler(context, event);
  callback(null, response);
};
