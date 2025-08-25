const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express4');
const { loadFiles } = require('@graphql-tools/load-files');
const cors = require('cors');
const express = require('express');
const resolvers = require('./resolvers')

const useApolloServer = async (app)=>{
  const apolloServer = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers
  })

  await apolloServer.start()
  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(apolloServer),
  )
}

module.exports = useApolloServer

