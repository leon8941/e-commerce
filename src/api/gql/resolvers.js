const bcrypt = require('bcrypt')

module.exports = {
  Query: {
    adminUsers: (obj, args, { db }) => db.AdminUser.findAll()
  },
  Mutation: {
    createAdminUser: async (obj, { email, name, role, password }, { db }) => {
      let encryptedPassword = await bcrypt.hash(password, 10)

      const result = await db.AdminUser.create({
        email: email,
        name: name,
        role: role,
        encryptedPassword: encryptedPassword
      })

      console.log(result)
    }
  }
}