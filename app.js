const express = require ("express")

const dotenv = require('dotenv')
const connectDB = require('./Database/db')


const app = express()
app.use(express.json());


connectDB()

dotenv.config()

const router = require('./Router/chatRouter')  
    
app.use('/',router)
// app.get("/",(req,res)=>{
// //    console.log(req.body,'egg');
//    res.send('ahsbiuasxlijksklamasklcjj')
   
// })

const port = process.env.port 

app.listen(port,()=>{
    console.log('the port is running in port 3000');
})