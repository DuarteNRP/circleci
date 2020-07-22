const config = require('config');

const env = config.get('env') || 'development';

module.exports = {
  [env]: {
    logging: config.get('debug'),
    migrationStorageTableName: 'migrations',
    url: config.get('database').cstring,
  },
};
