const service = require('./service');

const requestManager = (response) => {
  return {
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
  return Promise.resolve(service.kudoService().createKudo(kudoData)).then((id) => {
    return requestManager({ ...JSON.parse(event.body), id });
  });
};

const getKudos = async () => {
  return Promise.resolve(service.kudoService().getKudos()).then((response) =>
    requestManager(response)
  );
};

const FUNCTION_PATH = {
  '/kudo': createKudoHandler,
  '/kudos': getKudos,
};

module.exports.handler = async (event, context, callback) => {
  const response = await fnHandler(context, event);
  callback(null, response);
};
