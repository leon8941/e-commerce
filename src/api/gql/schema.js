module.exports = `
  type AdminUser {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  type Query {
    adminUsers: [AdminUser!]
    adminUser(id: ID!): AdminUser
  }

  type Mutation {
    createAdminUser(
      email: String!,
      name: String!,
      role: String!,
      password: String!
    ): AdminUser!
  }
`