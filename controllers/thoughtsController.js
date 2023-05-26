const { Thought } = require('../models');

module.exports = {
    //GET all thought
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    //GET thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__V')
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },



//more to add for more functions



  // Update a thought
updateThought(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

// Delete a thought
deleteThought(req, res) {
  Thought.findOneAndDelete({ _id: req.params.thoughtId })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with that ID' })
        : Reaction.deleteMany({ _id: { $in: thought.reactions } })
    )
    .then(() => res.json({ message: 'Thought and Reactions Deleted!' }))
    .catch((err) => res.status(500).json(err));
},

// Add a reaction
createReaction(req, res) {
Thought.findOneAndUpdate(
  { _id: req.params.thoughtId },
  { $addToSet: { reactions: req.body } },
  { runValidators: true, new: true }
)
  .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with that ID' })
      : res.json(thought)
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},

// Remove a reaction
deleteReaction(req, res) {
Thought.findOneAndUpdate(
  { _id: req.params.thoughtId },
  { $pull: { reactions: { reactionId: req.params.reactionId } } },
  { runValidators: true, new: true }
)
  .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with that ID' })
      : res.json(thought)
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},

}






