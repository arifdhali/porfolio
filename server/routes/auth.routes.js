const express = require('express');
const { loginController, logOutController } = require('../controllers/auth.controller');
const AuthMiddleware = require('../Auth/middleware');
const route = express.Router();

route.post('/login', loginController);

route.get("/logout", logOutController);



module.exports = route;