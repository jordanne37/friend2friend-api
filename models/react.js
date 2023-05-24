const { Schema, Types } = require('mongoose');


// Schema that creates Post models

const reactSchema = new Schema({
    reactId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
    reactBody: { type: String,  required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, 
{
  toJSON: {
      getters: true,
  },
  id: false,
});



module.exports = reactSchema;