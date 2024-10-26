const jwt = require('jsonwebtoken');
const AuthModel = require("../models/auth.model");
const { CurrentDate } = require("../utils/index");
const Email_ArrangeData = require("../email/Email_ArrangeData");
const { login_template } = require("../email/Template")
const date = CurrentDate();
let time = new Date().getTime();
let formattedTime = new Date(time).toLocaleTimeString();

const authModelInstance = new AuthModel(date, formattedTime);
const send_email = new Email_ArrangeData();

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
                    expiresIn: 1 * 60 * 60
                }
            );

            res.cookie('Login_token', token, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true, sameSite: "None" });

            // Email content
            let content = {
                to: email,
                subject: "Login Alert",
                text: "Arif Blog",
                html: login_template("Arif", formattedTime, date)
            };

            // Send login notification email
            let emailResponse = await send_email.sendMail(content);
            if (!emailResponse?.messageId) {
                return res.json({
                    status: false,
                    message: "Email sending failed"
                });
            }
            return res.json({
                status: true,
                message: "Login successful"
            });

        } else {
            return res.json({
                status: false,
                message: "Invalid email or password"
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
        message: "Log out successful"
    });
}

module.exports = {
    loginController,
    logOutController
};
