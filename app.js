//setup the server
const express = require('express')
const cors = require('cors')
const noteRouter = require('./route/noteRoute')

const app = express()

// Allow requests from any origin 
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json   
app.use(express.json())



const baseURL = '/api/v1'

app.use(baseURL,noteRouter)

app.listen(5000,()=>{
    console.log('server is listening to port 5000')
})