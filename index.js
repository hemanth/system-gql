#!/usr/bin/env node
'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const schema = require('./schema')
const {readFileSync} = require('fs')
const marked = require('marked')
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

app.use('/', (req, res) => {
  res.type('html')
  res.end(marked(readFileSync('./README.md', 'utf-8')))
})

const PORT = process.env.SYSQL || 3333
app.listen(PORT, () => {
  console.log(`System info on ${PORT}.`)
})
