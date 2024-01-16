const keysModel = require('../models/keysModel')

newKey = (req, res) => {
    res.status(200).json(keysModel.createKey())
}

module.exports = {
    newKey
}