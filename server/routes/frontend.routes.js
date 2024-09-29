const express = require('express');
const HomeRouteControllers = require('../controllers/home.controller');
const blogSingleControllers = require("../controllers/blog_single.controller");
const route = express.Router();


route.get("/", HomeRouteControllers);
route.get("/blog/:slug", blogSingleControllers);

module.exports = route;

