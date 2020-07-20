const Sequelize = require('sequelize');
const _ = require('lodash');
const config = require('config');
const models = require('models');

const { database, dialect = 'mysql', host, password, port, user } = config.get(
  'database'
);

const sequelize = new Sequelize(database, user, password, {
  define: {
    freezeTableName: true,
    paranoid: true,
    underscored: true,
  },
  dialect,
  dialectOptions: {
    timezone: 'Etc/GMT0',
  },
  host,
  logging: false,
  pool: {
    acquire: 30000,
    idle: 10000,
    max: 10,
    min: 2,
  },
  port,
});

const db = { sequelize };

db.transaction = async function transaction(fn, options) {
  options = _.assign(
    {
      isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED,
    },
    options
  );
  const transaction = await db.sequelize.transaction(options);

  let result;

  try {
    result = await fn(transaction);
    await transaction.commit();
  } catch (e) {
    await transaction.rollback();
    throw e;
  }

  return result;
};

module.exports = {
  init: () => {
    _.forEach(_.values(models), model => {
      if (_.isFunction(model.init)) {
        model.init(sequelize);
        if (_.isFunction(model.associate)) {
          model.associate(models);
        }
      }
    });
    _.assign(db, models);

    return db;
  },
};
