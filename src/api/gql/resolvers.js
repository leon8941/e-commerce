const bcrypt = require('bcrypt')
const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { ApolloError } = require('apollo-server-express')

module.exports = {
  /* Epoch timestamp format */
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value) // value from the client
    },
    serialize(value) {
      return value.getTime() // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value) // ast value is always in string format
      }
      return null
    },
  }),

  Query: {
    adminUsers: (obj, args, { db }) => db.AdminUsers.findAll(),
    adminUser: (obj, args, { db }) => db.AdminUsers.findByPk(args.id),
    users: (obj, args, { db }) => db.Users.findAll(),
    user: (obj, args, { db }) => db.Users.findByPk(args.id)
  },

  Mutation: {
    createAdminUser: async (obj, args, { db }) => {
      let { email, name, role, password } = args
      let encryptedPassword = await bcrypt.hash(password, 10)

      try {
        const result = await db.AdminUsers.create({
          email: email,
          name: name,
          role: role,
          encryptedPassword: encryptedPassword
        })

        return result
      }
      catch (exception) {
        if (typeof exception.errors === 'undefined') {
          throw new Error(exception.name)
        }
        else {
          throw new ApolloError(
            exception.errors.reduce((accumulator, currentValue) => { return accumulator + currentValue.message + ", " }, ""),
            exception.name
          )
        }
      }
      
    },

    createUser: async (obj, args, { db }) => {
      let { email, password, firstName, lastName, gender, dateOfBirth } = args
      let encryptedPassword = await bcrypt.hash(password, 10)
      
      try {
        const results = await db.Users.create({
          email: email,
          encryptedPassword: encryptedPassword,
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          dateOfBirth: dateOfBirth,
          status: "active"
        })

        return results
      }
      catch (exception) {
        if (typeof exception.errors === 'undefined') {
          throw new Error(exception.name)
        }
        else {
          throw new ApolloError(
            exception.errors.reduce((accumulator, currentValue) => { return accumulator + currentValue.message + ", " }, ""),
            exception.name
          )
        }
      }
    }
  }
}