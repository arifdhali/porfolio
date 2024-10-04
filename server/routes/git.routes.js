const express = require('express');
const route = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

route.get("/:user", async (req, res) => {
    const { user } = req.params;
    let gitApi = `${process.env.GIT_API}${user}`;

    try {
        let response = await axios.get(gitApi);
        let { name, avatar_url, public_repos } = response.data

        return res.json({
            status: true,
            git_data: {
                name,
                avatar_url,
                public_repos
            }
        })

    } catch (e) {
        console.log(e)
    }

})


module.exports = route;
