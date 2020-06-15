const bcrypt = require('bcrypt')
const { ApolloError, ValidationError } = require('apollo-server-express')
const { Error } = require('sequelize')

module.exports = {
  Query: {
    adminUsers: (obj, args, { db }) => db.AdminUser.findAll()
  },
  Mutation: {
    createAdminUser: async (obj, { email, name, role, password }, { db }) => {
      let encryptedPassword = await bcrypt.hash(password, 10)

      try {
        const result = await db.AdminUser.create({
          email: email,
          name: name,
          role: role,
          encryptedPassword: encryptedPassword
        })

        return result
      }
      catch (exception) {
        throw new ApolloError(
          exception.errors.reduce((accumulator, currentValue) => { return accumulator + currentValue.message + ", " }, ""),
          exception.name
        )
      }
    }
  }
}