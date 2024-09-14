const postModel = require('../models/post.model');
const {CurrentDate,SlugGenerator} = require("../utils/index");

let todayDate = CurrentDate();
let postModelInstance = new postModel(todayDate);


// GET POSTS

const getPostsController = async (req, res) => {

    try {

        let response = await postModelInstance.getPosts();
        return res.json({
            status: true,
            message: "Post get success",
            response
        })


    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });
    }

}



//CREATE
const creatPostController = async (req, res) => {

    try {
        const thumbnail = req.file;
        if (!thumbnail) {
            return res.json({
                status: false,
                message: "No thumbnail uploaded",
            });
        }

        const { title, excerpt, content, category } = req.body;
        let titleSlug = SlugGenerator(title);

        let processData = [
            title,
            titleSlug,
            excerpt,
            content,
            thumbnail.filename,
            category
        ];

        let result = await postModelInstance.createPost(processData);

        // Check if the post was created
        if (result.affectedRows > 0) {
            let relationID = [
                result.insertId,
                parseInt(category)
            ];

            // Insert category relation
            await postModelInstance.insertCategoryRelation(relationID);

            return res.json({
                status: true,
                message: "Post created successfully"
            });
        } else {
            console.log('No rows affected');
            return res.json({
                status: false,
                message: "Something went wrong! Please try again",
            });
        }

    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });
    }
};


// EDIT 

const editPostController = async (req, res) => {
    try {
        const { id } = req.params;
        let response = await postModelInstance.getPosts(id);
        return res.json({
            status: true,
            edit_data: response
        })
    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        })


    }


}

module.exports = {
    getPostsController,
    creatPostController,
    editPostController
};
