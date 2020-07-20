const types = require('../fixtures/types.json');

module.exports = {
  down: async queryInterface => {
    await queryInterface.bulkDelete('types', null, {});
  },
  up: async queryInterface => {
    await queryInterface.bulkInsert('types', types);
  },
};
