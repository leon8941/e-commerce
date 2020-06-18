module.exports = `
  type AdminUsers {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  type Query {
    adminUsers: [AdminUsers!]
    adminUser(id: ID!): AdminUsers
  }

  type Mutation {
    createAdminUser(
      email: String!,
      name: String!,
      role: String!,
      password: String!
    ): AdminUsers!
  }
`