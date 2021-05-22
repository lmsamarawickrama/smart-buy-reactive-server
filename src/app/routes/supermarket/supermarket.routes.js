const { graphqlHTTP } = require("express-graphql")
const graphqlSchema = require("../../graphql/schema/supermarket.schema")
const graphqlResolvers = require("../../graphql/resolvers/supermarket.resolver")

module.exports = app => {
    app.use(
        "/api/supermarkets",
        graphqlHTTP({
            schema: graphqlSchema,
            rootValue: graphqlResolvers,
            graphiql: true,
        })
    )
};