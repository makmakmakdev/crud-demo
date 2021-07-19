const User = require('../models/User');

module.exports = {
    create: async (req, res) => {
        //Set values here
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        //Save new document here
        try {
            const savedUser = await user.save( err => {
                if (err) res.status(400).send(err);
            });
            res.json(user);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    read: async (req, res) => {
        //Fetch all document
        try {
            const user = await User.find();
            res.json(user);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    findOne: async (req, res) => {
        //Fetch a single document using id
        try {
            const user = await User.findOne({_id: req.params.id});
            res.json(user);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    update: async (req, res) => {
        //Update a document
        try {
            const user = await User.findOne({_id: req.params.id});
            const updatedUser = await User.updateOne({_id: req.params.id}, {
                $set: {
                    email: req.body.email || user.email,
                    password: req.body.password || user.password
                }
            });

            res.json(updatedUser);
        } catch (err) {
            res.status(400).send(err);
        }
    },
    delete: async (req, res) => {
        //Delete a single document using id
        try {
            const removedUser = await User.deleteOne({_id: req.params.id});
            res.send(removedUser);
        } catch (err) {
            res.status(400).send(err);
        }
    },
};