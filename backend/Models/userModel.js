const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({


    usernames:{


        type: String,

        required: true,

        unique: true,

        min: 3,

        max: 50,
    },

    email:{

        type: String,

        max: 50,

        required: true,

        unique: true,

    },

    password:{

        type: String,

        required: true,

        min: 8,
        
        unique:true,
    },

   


});

module.exports = mongoose.model('patient', UserSchema);