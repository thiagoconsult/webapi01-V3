const { v4 } = require('uuid')
const fs = require('fs')
const FILE_PATH = require('path').join(__dirname, '..', 'data', 'keys.json')

findKeys = () => {
    try{
        const keys = fs.readFileSync(FILE_PATH)
        return JSON.parse(keys)
    }catch(err){
        fs.writeFileSync(FILE_PATH, '[]')
        const keys = fs.readFileSync(FILE_PATH)
        return JSON.parse(keys)
    }
}

createKey = () => {
    const keys = findKeys()

    const apiKey = {
        key: v4(),
        enabled: true
    }

    keys.push(apiKey)

    fs.writeFileSync(FILE_PATH, JSON.stringify(keys))

    return apiKey
}

findKey = (key) => {
    if(key){
        return findKeys().find(k => k.key === key)
    } else{
        return false
    }
}

module.exports = {
    createKey,
    findKey
}