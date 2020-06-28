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
SQL and NoSQL ideas: 
https://www.quora.com/Does-it-make-sense-to-combine-both-NoSQL-and-SQL-Why
https://www.quora.com/I-see-sites-using-multiple-databases-like-NoSQL-and-SQL-together-how-is-this-done

https://medium.com/valtech-ch/setup-a-rest-api-with-sequelize-and-express-js-fae06d08c0a7
https://softwareontheroad.com/ideal-nodejs-project-structure
https://github.com/santiq/bulletproof-nodejs
Sequalize sync : https://medium.com/@smallbee/how-to-use-sequelize-sync-without-difficulties-4645a8d96841
sessions management : https://www.npmjs.com/package/connect-session-sequelize

GraphQL scalar type:
https://stackoverflow.com/questions/41510880/whats-the-difference-between-parsevalue-and-parseliteral-in-graphqlscalartype
https://github.com/graphql/graphql-js/issues/500

Apollo Federation, a new way of implementing GraphQL:
[https://www.apollographql.com/docs/apollo-server/federation/introduction/] Apollo Federation overview, separation of concern. Look at Concern-based separation
[https://blog.logrocket.com/the-what-when-why-and-how-of-federated-graphql/] Benefits of federation

Linting:
npx eslint src/

Hosting:
1. Google App Engine (Standard environment) - https://cloud.google.com/appengine/docs/nodejs
2. Google Authentication:
   - https://firebase.google.com/docs/auth/web/custom-auth
   - https://firebase.google.com/docs/auth/admin/create-custom-tokens
   - https://www.apollographql.com/docs/apollo-server/security/authentication/#authorization-in-data-models
   - https://reallifeprogramming.com/authentication-and-authorization-in-nodejs-graphql-api-58528f6fce5f


1st Phase To do :
- [x] Develop a proper ORM with Sequelize
- [x] Implement an Rail's Active Admin like admin portal, with AdminBro in Express Js
- [x] Implement Apollo GraphQL
- [x] Unit tests with Mocha
- [ ] Deploy to Google Cloud
- [ ] Implement Continuous integration
- [ ] Implement simple "plug and play" concept for anyone to use