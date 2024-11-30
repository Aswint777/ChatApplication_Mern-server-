const express = require ("express")

const dotenv = require('dotenv')
const connectDB = require('./Database/db')
const cors = require('cors')
const path = require("path");
const cookieParser = require("cookie-parser");

// express
const app = express()

dotenv.config()

app.use(express.json());

//database 
connectDB()

// cors
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: [allowedOrigins],
  credentials: true,
};
app.use(cors(corsOptions));

// router
const router = require('./Router/chatRouter')  
    
app.use('/',router)

app.use(cookieParser());


//port
const port = process.env.port 
app.listen(port,()=>{
    console.log('the port is running in port 3000');
})