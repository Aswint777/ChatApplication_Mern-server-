const { default: mongoose } = require("mongoose");

const chatModel = mongoose.Schema({
    chatName: {
        type : String,
        Trim: true
    },
    isGroupChat:{
        type : Boolean,
        default : false
    },
    users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },],
    latestMassage:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'massage'
    },
    groupAdmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

})

const chat = mongoose.model('chat',chatModel)

module.exports = chat