const { User, Thought } = require('../models');

module.exports = {
    //GET all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    //GET user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__V')
        .then((user) =>
        !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    }



}