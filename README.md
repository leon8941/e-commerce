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
- [ ] Implement Next Js
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

### Development with Docker Compose:
1. Installing dependencies: `scripts/install_lib.sh`
2. Run database migration: `scripts/db_migration.sh`
3. Start the server in detached mode `scripts/start_server.sh` or `docker-compose up`
4. Run `docker-compose stop` to stop running containers, and `docker-compose start` to start back teh containers.
5. Run `docker-compose down` to remove containers.

#### Docker useful commands:
   - `docker ps`
   - `docker exec -it <container_id> /bin/sh` -- remote ssh inside container
   - `docker volume ls`
   - `docker-compose down`
   - `docker-compose ls`
   - `docker volume rm [VOLUME NAME]` -- remove volumes created by docker compose

### Useful Links:
1. Using both SQL and NoSQL ideas: 
   - https://www.quora.com/Does-it-make-sense-to-combine-both-NoSQL-and-SQL-Why
   - https://www.quora.com/I-see-sites-using-multiple-databases-like-NoSQL-and-SQL-together-how-is-this-done

2. Express Js and Sequelize related info:
   - Setup RestAPI with ExpressJs and Sequelize: https://medium.com/valtech-ch/setup-a-rest-api-with-sequelize-and-express-js-fae06d08c0a7
   - Ideal NodeJs project structure: https://softwareontheroad.com/ideal-nodejs-project-structure
   - Sequalize sync: https://medium.com/@smallbee/how-to-use-sequelize-sync-without-difficulties-4645a8d96841
   - Sessions management: https://www.npmjs.com/package/connect-session-sequelize

3. Next Js
   - https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/
   - Apollo client as front end:
     - https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/
     - https://dev.to/angad777/setting-up-apollo-graphql-in-next-js-with-server-side-rendering-45l5
  
4. GraphQL related info:
   - GraphQL scalar type: https://stackoverflow.com/questions/41510880/whats-the-difference-between-parsevalue-and-parseliteral-in-graphqlscalartype
   - Scalar's serialize, parseValue and parseLiteral differences: https://github.com/graphql/graphql-js/issues/500
   - Apollo Federation, a new way of implementing GraphQL:
      - Apollo Federation overview, separation of concern. Look at [Concern-based separation](https://www.apollographql.com/docs/apollo-server/federation/introduction/).
      - [Benefits of federatio](https://blog.logrocket.com/the-what-when-why-and-how-of-federated-graphql/).
   - Apollo Clients
     - Advance usage - https://www.apollographql.com/docs/link/

5. Deployment and Hosting:
   - Heroku with Docker
     - Use container registry an runtime
       - https://www.sentinelstand.com/article/docker-with-node-in-development-and-production
     - Docker beginner tutorial
       - https://docker-curriculum.com/
     - Manage secrets with Docker
       - https://docs.docker.com/engine/swarm/secrets/#read-more-about-docker-secret-commands
       - https://morioh.com/p/887a4e02f9b0
   - Docker
     - https://www.codemochi.com/blog/2019-07-08-prisma-2-nextjs-docker
     - Best practive - https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#environment-variables
   - Google Authentication:
     - https://firebase.google.com/docs/auth/web/custom-auth
     - https://firebase.google.com/docs/auth/admin/create-custom-tokens
     - https://www.apollographql.com/docs/apollo-server/security/authentication/#authorization-in-data-models
     - https://reallifeprogramming.com/authentication-and-authorization-in-nodejs-graphql-api-58528f6fce5f


