const express = require('express');
const { registerController, loginController, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middleWare/authMiddleware');

const routes= express.Router();
//routes

//REGISTER || POST
routes.post('/register',registerController);

//LOGIN || POST
routes.post('/login',loginController);

//Current User || GET
routes.get('/current-user', authMiddleware, currentUserController);
module.exports = routes