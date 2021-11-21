const repository = require('../repository');

module.exports.kudoService = () => {
  return {
    createKudo: (kudo) => {
      return repository.kudosRepository().insertKudo(kudo);
    },
    getKudos: async () => {
      const data = await repository.kudosRepository().getKudos();
      return data;
    },
  };
};
