const keysModel = require('../models/keysModel')

module.exports = authorizationMiddleware = (req, res, next) => {
    console.log(req.headers)
    let key = req.headers['authorization']

    if(key){

        let apiKey = keysModel.findKey(key.replace('Apikey ', ''))

        if(apiKey && apiKey.enabled){
            next()
        } else {
            res.sendStatus(401)
        }
        
    }

    res.sendStatus(401)
}