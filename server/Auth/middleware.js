const jwt = require('jsonwebtoken');

const AuthMiddleware = (req, res, next) => {
    const token = req.cookies.Login_token;
    if (!token) {
        return res.json({
            status: false,
            message: "Unauthorized access, no token provided"
        });
    }
    try {
        const secret = process.env.JWT_SECRET || 'testing_blog';
        const decoded = jwt.verify(token, secret);
        req.user_id = decoded.user_id;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {

            return res.json({
                status: false,
                message: "Unauthorized access , expired token"
            })
        }
        return res.json({
            status: false,
            message: "Unauthorized access, invalid token"
        });
    }
};
module.exports = AuthMiddleware;
