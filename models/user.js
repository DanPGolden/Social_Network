const mongoose = require('mongoose');
const Email = require('mongoose-type-email')
const  Thought  = require('./thought')

const userSchema = new mongoose.Schema( 
 {
     username: {
         type: String,
         required: true,
         unique: true,
         trim: true,
    },
     email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        max_length: 50,
        trim: true,
     },
     thoughts: [
         {
         type: mongoose.SchemaTypes.ObjectId,
         ref: 'thought',
        },
    ],
     friends: [
        {
          type:  mongoose.SchemaTypes.ObjectId,
          ref: 'user',  
        },
     ],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
        
    } 

);
 
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  })
  
  //const User = model('User', userSchema, "users")
  
  module.exports = mongoose.model('user', userSchema, "users");
