const { v4 } = require('uuid')
const fs = require('fs')
const FILE_PATH = require('path').join(__dirname, '..', 'data', 'users.json')

findUsers = () => {
    try{
        const users = fs.readFileSync(FILE_PATH)
        return JSON.parse(users)
    }catch(err){
        fs.writeFileSync(FILE_PATH, '[]')
        const users = fs.readFileSync(FILE_PATH)
        return JSON.parse(users)
    }
}

insertUser = (user) => {
    const users = findUsers()
    user.id = v4()
    users.push(user)
    fs.writeFileSync(FILE_PATH, JSON.stringify(users))
    return user
}

updateUser = (id, user) => {
    const users = findUsers()
    const index = users.findIndex(item => item.id === id)

    if(index === -1){
        return []
    }

    user.id = id
    users[index] = user

    fs.writeFileSync(FILE_PATH, JSON.stringify(users))
    return user
}

findUser = (id) => {
    const user = findUsers().find(item => item.id === id)

    if(!user){
        return null
    }

    return user
}

deleteUser = (id) => {
    
    const users = findUsers()
    let result = []
        
    users.forEach((item, index) => {
        if(item.id === id){
            result.push(item)
            users.splice(index, 1)
            fs.writeFileSync(FILE_PATH, JSON.stringify(users))
        }
    })
    
    console.log(result)

    return result
}

module.exports = {
    findUsers,
    insertUser,
    updateUser,
    findUser,
    deleteUser
}