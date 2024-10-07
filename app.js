const express = require ("express")

const dotenv = require('dotenv')

const app = express()

dotenv.config()

const router = require('./Router/chatRouter')
   
app.use('/',router)

const port = process.env.port 

app.listen(port,()=>{
    console.log('the port is running in port 3000');
})