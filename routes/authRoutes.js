const express = require('express');
const { registerController } = require('../controllers/authController');

const routes= express.Router();
//routes

//REGISTER || POST
routes.post('/register',registerController);

module.exports = routes