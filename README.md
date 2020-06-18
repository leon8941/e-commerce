Sample database for E-commerce:
https://creately.com/diagram/example/iosv0d302/E-commerce%20database%20schema

Database ORM:
https://sequelize.org/v5/

seq.sequelize.authenticate().then(...)


Migrations:

generate model: npx sequelize-cli model:generate --name AdminUser --attributes email:String,name:String,password:String
running migration: npx sequelize-cli db:migrate
create seed file: npx sequelize-cli seed:generate --name demo-user
running seeds file: npx sequelize-cli db:seed:all
running seeds for specific file: npx sequelize-cli db:seed --seed [seed_file_name].js

Admin Portal:
https://adminbro.com/tutorial-00-installation-instructions.html


Tutorial:
https://medium.com/valtech-ch/setup-a-rest-api-with-sequelize-and-express-js-fae06d08c0a7
https://softwareontheroad.com/ideal-nodejs-project-structure
https://github.com/santiq/bulletproof-nodejs
Sequalize sync : https://medium.com/@smallbee/how-to-use-sequelize-sync-without-difficulties-4645a8d96841
sessions management : https://www.npmjs.com/package/connect-session-sequelize

GraphQL scalar type:
https://stackoverflow.com/questions/41510880/whats-the-difference-between-parsevalue-and-parseliteral-in-graphqlscalartype
https://github.com/graphql/graphql-js/issues/500

Linting:
npx eslint src/

updateAdminUser(
  id: ID!,
  email: String,
  name: String,
  role: String
): AdminUser!

deleteAdminUser (
  id: ID!
): Int!