const userModel = require('../models/userModel')

getUsers = (req, res) => {
    res.status(200).json(userModel.findUsers())
}

createUser = (req, res) => {
    const user = req.body
    res.status(201).json(userModel.insertUser(user))
}

updateUserById = (req, res) => {
    const id = req.params.id
    const user = req.body
    res.status(200).json(userModel.updateUser(id, user))
}

getUserById = (req, res) => {
    const id = req.params.id

    const result = userModel.findUser(id)
    
    if(result === null){
        res.sendStatus(404)
    }

    res.status(200).json(result)
}

deleteUserById = (req, res) => {
    let id = req.params.id
    res.json(userModel.deleteUser(id))
}

module.exports = {
    getUsers,
    createUser,
    updateUserById,
    getUserById,
    deleteUserById
}