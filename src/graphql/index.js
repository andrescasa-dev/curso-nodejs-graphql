const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express4');
const cors = require('cors');
const express = require('express');

const typeDefs = `
  type Query {
    helloWorld: String
  }
`

const resolvers = {
  Query: {
    helloWorld: ()=> "hola mundo"
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

const useApolloServer = async (app)=>{
  await apolloServer.start()
  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(apolloServer),
  )
}

module.exports = useApolloServer

