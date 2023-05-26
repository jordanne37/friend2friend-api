const { Schema, model } = require('mongoose');
const reactSchema = require('./react');

// Schema to create Post model
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date,  default: Date.now },
    username: { type: String, required: true },

    reactions: [reactSchema]
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
  }
  );
  
  // Create a virtual
  thoughtSchema
    .virtual('reactCount')

    .get(function () {
      return this.react.length;
    }
);

// Initialize
const Thought = model('thought', thoughtSchema);

module.exports = Thought;