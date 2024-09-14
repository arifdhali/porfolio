const jwt = require('jsonwebtoken');
const AuthModel = require("../models/auth.model");
const { CurrentDate } = require("../utils/index");

const date = CurrentDate();
let time = new Date().getTime();
let formattedTime = new Date(time).toLocaleTimeString();

const authModelInstance = new AuthModel(date, formattedTime);

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;


        // Check login credentials
        let user = await authModelInstance.loginModels(email, password);
        if (user) {
            const { id } = user;
            const payload = {
                user_id: id,
            };
            const secret = process.env.JWT_SECRET || 'testing_blog';
            const token = jwt.sign(
                payload,
                secret,
                {
                    expiresIn: 1 * 60 * 60 * 1000
                }
            );
            res.cookie('Login_token', token, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true, SameSite: "None" });
            return res.json({
                status: true,
                message: "Login successful"
            });
        }

    } catch (error) {
        return res.json({
            status: false,
            message: error.message || "Unknown error occurred",
        });
    }
}

const logOutController = (req, res) => {
    res.clearCookie("Login_token");
    return res.json({
        status: true,
        message: "Log out success"
    })
}

module.exports = {
    loginController,
    logOutController
};
