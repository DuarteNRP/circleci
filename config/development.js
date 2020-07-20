const debug = process.env.DEBUG || false;
const env = 'development';
const app = {
  close: { timeout: 1000 },
  listen: {
    host: '0.0.0.0',
    port: 9000,
  },
};
const database = {
  cstring: 'postgres://root:root@localhost:5432/cestos',
  database: 'cestos',
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  dialect: 'postgres',
  host: 'localhost',
  password: 'root',
  port: 5432,
  user: 'root'
};

module.exports = { app, database, debug, env };
