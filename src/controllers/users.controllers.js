const usersController = {};
const User = require('../models/User');

usersController.getUsers = async (req, res)=>{
    const users = await User.find();
    res.json(users)
}

usersController.postUser = async (req, res)=>{
    const newUser = new User({userName : req.body.userName})
    await newUser.save();
    res.json({messaje: 'Usuario Guardado'})
}


usersController.deleteUser = async (req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    res.json({messaje: 'Usuario eliminada'})
}

usersController.getUser = async (req, res)=>{
    const user = await User.findById(req.params.id)
    res.json(user)
}

module.exports = usersController