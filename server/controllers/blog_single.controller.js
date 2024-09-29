const postModel = require('../models/post.model');
let postModelInstance = new postModel();

const BlogSingle_controller = async (req, res) => {
    try {
        const { slug } = req.params;
        let post = await postModelInstance.getPostBySlug(slug);
        if (!post) {
            return res.status(404).json({
                status: false,
                message: "Post not found",
            });
        }

        return res.json({
            status: true,
            message: "Post retrieved successfully",
            post
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });
    }
};

module.exports = BlogSingle_controller;
