module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "dod123ria",
  DB: "invoice-system",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};