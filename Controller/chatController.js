const { chats } = require("./data/data")
const User = require('../Model/userModel')


const userSignUp = (req,res)=>{
    console.log(req.body, 'Incoming request body'); // Debug the request body

    console.log('llal');
    
    // // const start = await User.create({
    // //     userName : 'userName',
    // //     email: 'email',
    // //     password : 'password'
    // // })
    // const [userName,email,password]= req.body
    // console.log(userName,email,password);
    
    const { userName } = req.body;
    console.log(req.body,'kkkkk');  
    

    if (!userName ) {
        return res.status(400).json({ message: "All fields are required" });
    }
    res.status(200).json({ message: "User signed up successfully!" });

    
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
    userSignUp
}