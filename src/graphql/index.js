const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express4');
const cors = require('cors');
const express = require('express');

const typeDefs = `
  type Query {
    helloWorld: String!
    getPersona(name: String, age: Int): String
    getPuppies(row: [Int]): [[String]]
  }
`

const resolvers = {
  Query: {
    helloWorld: ()=> "Hola mundo",
    getPersona: (_, {name, age})=> `i'm ${name}, i'm ${age} years old`,
    getPuppies: (_, {row})=>{
      return row.map((number) =>{
        return Array.from({length: number}, (_, idx)=>`puppy${idx + 1}`)
      })
    }
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

