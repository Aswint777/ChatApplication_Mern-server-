const { chats } = require("./data/data")
const User = require('../Model/userModel')


const userSignUp = async(req,res)=>{
    console.log(req.body, 'Incoming request body'); // Debug the request body
    const {userName,email,password} = req.body

    console.log(userName,email,password);
    
    const userData = await User.create({
        userName : userName,
        email: email,
        password : password
    })
    if (!userName ) {
        return res.status(400).json({ message: "All fields are required" });
    }
    res.status(201).json({ user: userData, message: "Signup successful" });
    // res.status(200).json({ message: "User signed up successfully!" });
}

const userLoginPost = async(req,res)=>{
   const {email,password} = req.body
   console.log(email,password);
    const userData = await User.find({email:email})
    console.log(userData,'==   ll');
    if(userData[0].password !== password ){
        return res.status(400).json({ message: "The password is incorrect" });
    }
    res.status(201).json({ user: userData, message: "Signup successful" });

}

const landingPage = (req,res)=>{
    res.send('api is running now here')
}

const sampleData =(req,res)=>{
    res.send(chats)
}


const singleChat =(req,res)=>{
    res.send(chats.find((a)=>a._id===req.params._id))
}
module.exports = {
    landingPage,
    sampleData,
    singleChat,
    userSignUp,
    userLoginPost
}