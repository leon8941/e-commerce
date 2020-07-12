const development = {
  "database": "ecommerce",
  "host": "127.0.0.1",
  "dialect": "postgres",
  "operatorsAliases": false
}
const test = {
  "username": "root",
  "password": null,
  "database": "database_test",
  "host": "127.0.0.1",
  "dialect": "postgres",
  "operatorsAliases": false
}
const production = {
  "dialect": "postgres",
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.HOST,
  "port": process.env.PORT,
  "operatorsAliases": false
}

module.exports = {
  "development": development,
  "test": test,
  "production": production
}