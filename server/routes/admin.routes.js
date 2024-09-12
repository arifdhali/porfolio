const express = require('express');
const route = express.Router();
const { createCategory, getCategory, deleteCategory, updateCategory } = require('../controllers/category.controller');
const { creatPostController, getPostsController } = require('../controllers/post.controller');
const multer = require('../utils/Multer.config');
const AuthMiddleware = require('../Auth/middleware');


//HOME 
route.get("/",  (req, res) => {
    res.json({
        status:true,
        message: "Admin page"
    })
});

// POST
route.get("/post", getPostsController);

const post = multer('post_img');
route.post("/post/create", post.single("featured_img"), creatPostController);


// CATEGORY
route.post("/post/category", createCategory);
route.get("/post/category", getCategory);
route.delete("/post/category/:id", deleteCategory);
route.patch("/post/category/edit/:id", updateCategory);

module.exports = route;
