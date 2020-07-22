const debug = process.env.DEBUG || false;
const env = 'test';
const database = {
  cstring: 'postgres://root:root@localhost:5432/cestos',
  database: 'cestos',
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  dialect: 'postgres',
  host: 'localhost',
  logging: false,
  password: 'root',
  port: 5432,
  user: 'root'
};

module.exports = { database, debug, env };
