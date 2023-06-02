const connection = require('../config/connections');
const { User, Thoughts } = require('../models');
const { userData, thoughtData, reactionData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing data
  await User.deleteMany({});
  await Thoughts.deleteMany({});
  
  console.log('deleted user, thoughts, and reaction data!');

  // Create user and thought
  const userDB = await User.insertMany(userData);
  const thoughtDB = await Thoughts.insertMany(thoughtData);
  console.log('users and thoughts seeded');

  // Insert Thoughts into the users thought array
  for (let i = 0; i < thoughtDB.length; i++) {
    const thought = thoughtDB[i];
    const user = userDB.find((user) => user.username === thought.username);
    user.thoughts.push(thought);
    await user.save();
  }


  console.log('reactions seeded');
  process.exit(0);
});