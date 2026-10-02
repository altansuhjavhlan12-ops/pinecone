const express = require('express');
const UserModal = require('../models/user.schema');
const {getUsers, getUserById} = require('../controller/user.controller');

const   userRoute = express.Router()

userRoute.post('/:userId',authMiddleware,getUserById)
userRoute.get('/create',authMiddleware,createUser)

module.exports = userRoute
