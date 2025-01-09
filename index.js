require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 1000
const knex = require('./config/knex');
const {Model} = require('objection');


app.use(express.json())
app.listen(port, ()=>{
    Model.knex(knex)
    console.log(`app running on port ${port}`)



    redisClient.connect().catch(() => {
        console.log('Redis client not connected');
        process.exit(1)
    })

    
    
})