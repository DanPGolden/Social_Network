const { Schema, model } = require('mongoose');
const Email = require('mongoose-type-email')
const { Thought } = require('./Thought')

const userSchema = new Schema( 
 {
     username: {
         type: String,
         required: true,
         unique: true,
         trim: true,
    },
     email: {
        type: SchemaTypes.Email,
        required: true,
        max_length: 50,
        trim: true,
     },
     thoughts: [
         {
         type: Schema.Types.ObjectId,
         ref: 'Thought',
        },
    ],
     friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',  
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
// generating the friendCount virtual calculating the number of friends. 
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  })
  
  const User = model('User', userSchema, "users")
  
  module.exports = User;
