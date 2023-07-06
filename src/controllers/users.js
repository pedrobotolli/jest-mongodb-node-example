const User = require('../models/User')

async function addUser (req, res) {
    const userAdded = await User.create(req.body);
    res.status(201).json(userAdded);
}

async function getUsers (req, res) {
    const users = await User.find();
    res.status(200).json(users);
}

async function getUser (req, res) {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
}

async function updateUser (req, res) {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
    res.status(200).json(updatedUser);
}

async function deleteUser (req, res) {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
}


module.exports = {
    getUsers, 
    addUser,
    getUser,
    updateUser,
    deleteUser
};
