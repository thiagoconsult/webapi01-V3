const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const validationMiddleware = require('../middlewares/validationMiddleware')

router.get('/', userController.getUsers);

router.post('/', validationMiddleware, userController.createUser);

router.put('/:id', validationMiddleware, userController.updateUserById)

router.get('/:id', userController.getUserById)

router.delete('/:id', userController.deleteUserById)

module.exports = router;
