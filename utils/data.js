const userData = [
    {
        "username": "pcman123",
        "email": "pcman123@gmail.com",
        'thoughts': []
    },
    {
        "username": "stylishqueen5",
        "email": "superstyle@hotmail.com",
        'thoughts': []
    },
    {
        "username": "flyhigh8",
        "email": "aviation66@hotmail.com",
        'thoughts': []
    },
    {
        "username": "runrunjen1985",
        "email": "strongbabe@outlook.com",
        'thoughts': []
    },
    {
        "username": "dancegavindance890",
        "email": "rageoutrage77@yahoo.com",
        'thoughts': []
    },
];

const thoughtData = [
    {
        'thoughtText': 'My game might be old but its a classic',
        'username': 'pcman123',
        'reactions': []
    },
    {
        'thoughtText': 'Check me out in this tournament next week',
        'username': 'runrunjen1985',
        'reactions': []
    },
    {
        'thoughtText': 'I believe I can touch the sky',
        'username': 'flyhigh8',
        'reactions': []
    },
    {
        'thoughtText': 'CANT WAIT FOR THE CONCERT',
        'username': 'dancegavindance890',
        'reactions': []
    },
    {
        'thoughtText': 'Gotta go fast',
        'username': 'hypersonic17',
        'reactions': []
    },
];

const reactionData = [
    {
      'reactionBody': 'Yo thats sick!',
      'username': 'slyguy94',
     
    },
    {
      'reactionBody': 'Amazing',
      'username': 'pacman24',
      
    },
    {
      'reactionBody': 'Excellent',
      'username': 'hypersonic17',
     
    },
    {
      'reactionBody': 'Yessir!',
      'username': 'gentlegiant63',
       
    },
    {
      'reactionBody': 'Keep fighting',
      'username': 'birdboy48',
      
    },
  ];
  
  //Pushing reactions into the thoughts db
  function addReactionToThought() {
    reactionData.forEach(reaction => {
      const thought = thoughtData.find(thought => thought.username === reaction.username);
      if (thought) {
        thought.reactions.push(reaction);
      }
    });
  }
  
  addReactionToThought();

  module.exports = { userData, thoughtData }