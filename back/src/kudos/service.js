const repository = require('./repository');

const sortObjectArrayByDate = (a, b) => {
  if (a.date < b.date) return 1;
  if (a.date > b.date) return -1;
  return 0;
};

module.exports.kudoService = () => {
  return {
    createKudo: (kudo) => {
      return repository.kudosRepository().insertKudo(kudo);
    },
    getKudos: async () => {
      const data = await repository.kudosRepository().getKudos();
      return data.sort(sortObjectArrayByDate);
    },
  };
};
