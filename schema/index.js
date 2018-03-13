const {makeExecutableSchema} = require('graphql-tools')
const resolvers = require('./resolvers')

// Define your types here.
const typeDefs = `
  type Query {
    info(filter: sysFilter): SystemInfo
  }

  input sysFilter {
    name: String!
  }

  type SystemInfo {
    cpus: CPU
    os: OS
    mem: MEM
  }

  type CPU {
    model: String,
    speed: Int,
    count: Int
  }

  type OS {
    arch: String,
    type: String,
    release: String,
    hostname: String
  }

  type MEM {
    free: String,
    total: String
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers})
