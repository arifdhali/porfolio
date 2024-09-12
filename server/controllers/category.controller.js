let CategoryModel = require("../models/category.model");
let currentDate = require("../utils/date.utils");

let todayDate = currentDate();
const categoryModelInstance = new CategoryModel(todayDate);


// POST
const createCategory = async (req, res) => {
    const { category } = req.body;

    try {
        // Validate category
        if (!category) {
            return res.json(
                {
                    status: false,
                    message: "Category is required"
                }
            );
        }


        // Prepare the payload
        const payload = {
            data: category
        };

        // Post category to the database
        await categoryModelInstance.postCategory(payload);
        return res.json({
            status: true,
            message: "Category created successfully",
        })

    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });

    }
}



// GET request
const getCategory = async (req, res) => {
    try {
        let response = await categoryModelInstance.getCategory();
        return res.json({
            status: true,
            message: "Category get success",
            data: response
        })
    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });
    }
}


// DELETE request

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await categoryModelInstance.deleteCateogry(id);
        return res.json({
            status: true,
            message: "Category deleted successfully",
        })

    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });
    }


}


// UPDATE request
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category } = req.body;

        const payload = {
            id:id,
            data: category,
        }
       let response =  await categoryModelInstance.updateCategory(payload);
        return res.json({
            status: true,
            message: "Category update successfully",

        })
    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });
    }

};

module.exports = { createCategory, getCategory, deleteCategory, updateCategory };