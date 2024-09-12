const express = require('express');
const { loginController } = require('../controllers/auth.controller');
const AuthMiddleware = require('../Auth/middleware');
const route = express.Router();

route.post('/login', loginController);



module.exports = route;