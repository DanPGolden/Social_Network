const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const reactionSchema = require('./reaction');
// const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You need to leave a thought!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
    
);

// thoughtSchema.virtual('reactionCount').get(function() {
//       return this.reactions.length;
//     });

  //const thought = model('thought', thoughtSchema);

  const Thought = model('thought', thoughtSchema, 'thoughts');

  module.exports = mongoose.model('thought', thoughtSchema);