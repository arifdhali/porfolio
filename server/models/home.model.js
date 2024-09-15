const BaseModal = require("./Base.model");

class ShowToFrontend_Models extends BaseModal {
    constructor() {
        super()
    }


    async getSingleLatestModal() {
        try {
            let getSql = 'SELECT post_title, post_slug, post_content, post_thumbnail FROM post ORDER BY post_publish_date DESC LIMIT 1';
            return await this.excutingQuery(getSql);
        } catch (error) {
            throw new Error("Error while geting lastes post " + error.message);
        }
    }

}

module.exports = ShowToFrontend_Models;

