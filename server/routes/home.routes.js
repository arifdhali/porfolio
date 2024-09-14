const express = require('express');
const HomeRouteControllers = require('../controllers/home.controller');
const route = express.Router();


route.get("/",HomeRouteControllers);

module.exports = route;