const { chats } = require("./data/data")

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
    singleChat
}