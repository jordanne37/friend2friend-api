const { Schema, model } = require('mongoose');
const reactionSchema = require('./react');

// Schema to create Post model
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date,  default: Date.now },
    username: { type: String, required: true },

    reactions: [reactSchema]
}

)