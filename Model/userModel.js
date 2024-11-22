const { default: mongoose } = require("mongoose");

const userModel = mongoose.Schema({
    userName: {
        type : String,
        Trim: true
    },
    email:{
        type: String,
        Trim : true
    },
    password:{
        type: String,
        Trim : true
    },
    // isGroupChat:{
    //     type : Boolean,
    //     default : false
    // }

})

const user = mongoose.model('user',userModel)

module.exports = user