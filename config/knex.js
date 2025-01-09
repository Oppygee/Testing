require('dotenv').config()
const environment = process.env.NODE_ENV || 'development'
let config = require('./database')[environment]

//Todo:
//Manage knex error here

module.exports = require('knex')(config)