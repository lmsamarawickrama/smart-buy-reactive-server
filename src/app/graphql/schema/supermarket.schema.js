const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Supermarket {
    _id: ID!
    identifier: String!
    name: String!
    url: String!
    active: Boolean!
    createdAt: String!
  }


  input SupermarketInput {
    identifier: String!
    name: String!
    url: String!
    active: Boolean!
  }

  type Query {
    getSuperMarkets:[Supermarket!]
  }

  type Mutation {
    addSuperMarket(supermarket:SupermarketInput): Supermarket
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)