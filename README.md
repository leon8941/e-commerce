# Complete e-commerce full stack architecture 

This repository is a skeleton for a sample e-commerce full-stack application. The technologies used or planned to be use in future are:
1. NodeJs
2. ExpressJs
3. Admin Bro
4. GraphQL
5. Unit Test - Mocha and Chai GraphQL
6. ORM - Sequelize
7. Deployment / hosting - Google Firebase cloud platform
8. Database - Postgres and Cloud Firestore
9. Elasticsearch

The SQL database's schema for common e-commerce system will be more or less based on [this](https://creately.com/diagram/example/iosv0d302/E-commerce%20database%20schema), but it doesn't really matter what application you are going to do as this repo can be applied for different industry, and that's what I am intend to do.

If you notice there are 2 databases mentioned above: **Postgres** and **Cloud Firestore**, **SQL** and **NoSQL**. What I have in mind is Postgres will be storing mostly master data, while Cloud Firestore will be storing transactional data that directly deliver and receive high traffic volume data to front-end. 

## Roadmap:
### 1st Phase To do :
- [x] Develop a proper ORM with Sequelize
- [x] Implement an Rail's Active Admin like admin portal, with AdminBro in Express Js
- [x] Implement Apollo GraphQL
- [x] Unit tests with Mocha
- [x] Make use of Fireadmin SDK for creating custom token for authentication, then front-end will leverage this token to gain access to Firebase SDK resources.
- [ ] Deploy to Heroku with Docker
- [ ] Implement CI / CD
- [ ] Implement simple "plug and play" concept for anyone to use

### 2nd Phase To do :
- [ ] Create a front-end using ReactJs
- [ ] Create a front-end using Flutter
- [ ] Create a front-end using VueJs
- [ ] Implement Typescript


## Development:
### Migrations with Sequelize:

1. Generate model:
   
   `npx sequelize-cli model:generate --name AdminUser --attributes email:String,name:String password:String`
2. Running migration:
   
   `npx sequelize-cli db:migrate`
3. Create seed file:
   
   `npx sequelize-cli seed:generate --name demo-user`

4. Running seeds file:
   
   `npx sequelize-cli db:seed:all`

5. Running seeds for specific file:
   
   `npx sequelize-cli db:seed --seed [seed_file_name].js`

### Admin Portal:
1. An automatic admin interface which can be plugged into a Nodejs application. [Admin bro](https://adminbro.com/tutorial-00-installation-instructions.html).


### Useful Links:
1. Using both SQL and NoSQL ideas: 
   - https://www.quora.com/Does-it-make-sense-to-combine-both-NoSQL-and-SQL-Why
   - https://www.quora.com/I-see-sites-using-multiple-databases-like-NoSQL-and-SQL-together-how-is-this-done
2. Express Js and Sequelize related info:
   - Setup RestAPI with ExpressJs and Sequelize: https://medium.com/valtech-ch/setup-a-rest-api-with-sequelize-and-express-js-fae06d08c0a7
   - Ideal NodeJs project structure: https://softwareontheroad.com/ideal-nodejs-project-structure
   - Sequalize sync: https://medium.com/@smallbee/how-to-use-sequelize-sync-without-difficulties-4645a8d96841
   - Sessions management: https://www.npmjs.com/package/connect-session-sequelize

3. GraphQL related info:
   - GraphQL scalar type: https://stackoverflow.com/questions/41510880/whats-the-difference-between-parsevalue-and-parseliteral-in-graphqlscalartype
   - Scalar's serialize, parseValue and parseLiteral differences: https://github.com/graphql/graphql-js/issues/500
   - Apollo Federation, a new way of implementing GraphQL:
      - Apollo Federation overview, separation of concern. Look at [Concern-based separation](https://www.apollographql.com/docs/apollo-server/federation/introduction/).
      - [Benefits of federatio](https://blog.logrocket.com/the-what-when-why-and-how-of-federated-graphql/).

4. Hosting:
   - Google App Engine (Standard environment) - https://cloud.google.com/appengine/docs/nodejs
   - Connect CloudSQL to Google App Engine:
     - https://cloud.google.com/sql/docs/postgres/connect-app-engine-standard#node.js
     - https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/cloud-sql/postgres/knex/README.md
     - https://cloud.google.com/sql/docs/postgres/quickstart-proxy-test
     - https://stackabuse.com/deploy-node-js-apps-on-google-app-engine/
     - https://medium.com/@gunar/how-to-use-environment-variables-in-gcloud-app-engine-node-js-86623b3ab0f6
     - https://medium.com/@mrdatainsight/performing-database-migrations-with-django-on-google-app-engine-and-cloud-sql-c7fd298581b4
   - Google Authentication:
     - https://firebase.google.com/docs/auth/web/custom-auth
     - https://firebase.google.com/docs/auth/admin/create-custom-tokens
     - https://www.apollographql.com/docs/apollo-server/security/authentication/#authorization-in-data-models
     - https://reallifeprogramming.com/authentication-and-authorization-in-nodejs-graphql-api-58528f6fce5f


