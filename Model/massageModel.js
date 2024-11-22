const { default: mongoose } = require("mongoose");

const massageModel = mongoose.Schema({
    sender:{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    content :{
        type : String,
        Trim: true
    },
    chat:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chat'  
    },
},
    {
        timestamps:true,
    }
        
)