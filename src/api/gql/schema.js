module.exports = `
  scalar Date

  type AdminUsers {
    id: ID!
    email: String!
    name: String!
    role: String!
  }

  enum UserStatus {
    active
    inactive
  }

  enum UserGender {
    male
    female
    other
  }

  type Users {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    gender: UserGender!
    dateOfBirth: Date
    status: UserStatus!
  }

  type Query {
    adminUsers: [AdminUsers!]
    adminUser(id: ID!): AdminUsers

    users: [Users!]
    user(id: ID!): Users
  }

  type Mutation {
    createAdminUser(
      email: String!,
      name: String!,
      role: String!,
      password: String!
    ): AdminUsers!

    createUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      gender: UserGender!
      dateOfBirth: Date
    ): Users!
  }
`