const express = require('express');
const app = express();
const connect = require('./config/config');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;
const path = require("path");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const adminRoutes = require("./routes/admin.routes");
const authRoutes = require("./routes/auth.routes");
const frontEndRoutes = require("./routes/frontend.routes");
const AuthMiddleware = require('./Auth/middleware');

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}))
app.use(express.static(path.join(__dirname, 'public')));



// for doing json
app.use(
    express.json()
)

app.use(express.urlencoded({
    extended: true,
}))

// ADMIN
app.use("/admin", AuthMiddleware, adminRoutes);

// AUTH
app.use('/auth', authRoutes);

// NORMAL OR HOME ROUTES
app.use("/", frontEndRoutes);

// BLOG SINGLE





app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`server running at http://localhost:${PORT}`);
})