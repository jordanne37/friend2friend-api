const { Schema, model } = require('mongoose');

// Schema to create Post model
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        //This is supposed to match a valid email using regex
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please Enter a valid Email Address!']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property 
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.username.length;
    });

// Initialize
const User = model('user', userSchema);

module.exports = User;