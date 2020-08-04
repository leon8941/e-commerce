const development = {
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": "postgres",
  "operatorsAliases": false
}
const test = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": "postgres",
  "operatorsAliases": false
}
const production = {
  "dialect": "postgres",
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": "postgres",
  "operatorsAliases": false
}

module.exports = {
  "development": development,
  "test": test,
  "production": production
}