const mongoose = require('mongoose');

//  step1:- Define Database Schema
const userSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
});

// step2:- convert this schema into a model to work with it.
const User = mongoose.model("User", userSchema);

module.exports = User;