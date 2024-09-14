const ShowToFrontend_Models = require("../models/home.model");

const HomeModelsInstance = new ShowToFrontend_Models();

const HomeRouteControllers = async (req, res) => {

    try {
        let data = await HomeModelsInstance.getSingleLatestModal();
//        console.log(data);
        return res.json({
            status: true,
            message: "Home routes success",
            data
        })
    } catch (error) {
        return res.json({
            status: false,
            message: "Internal Server Error",
            error: error.message || "Unknown error occurred",
        });
    }
}

module.exports = HomeRouteControllers;