const BaseModal = require("./Base.model");
const QueryReducer = require('../utils/Table_Query_Reducer');

class PostModels extends BaseModal {

    constructor(date) {
        super();
        this.date = date
    }

    async getPosts() {
        let getQuery = 'SELECT id, post_title,post_content,post_status,post_publish_date FROM post';
        let response = await this.excutingQuery(getQuery);
        return response;

    }

    async createPost(data) {
        try {

            let columnsName = ['post_title', 'post_content', 'post_thumbnail', 'category_id', 'post_publish_date'];
            let values = QueryReducer(columnsName);

            let createQuery = `INSERT INTO post (${columnsName}) VALUES (${values})`;
            const processData = [
                ...data,
                this.date
            ]
            let response = await this.excutingQuery(createQuery, processData);
            return response;
        } catch (error) {
            throw new Error("Error creating post: " + error.message);
        }
    }
    async insertCategoryRelation(data) {

        try {
            const processData = [
                ...data,
                this.date
            ]

            let columnsName = ['post_id', 'category_id', 'date'];
            let values = QueryReducer(columnsName);


            let inertQuery = `INSERT INTO category_relation (${columnsName}) VALUES(${values})`;
            let response = await this.excutingQuery(inertQuery, processData);

            return response;


        } catch (error) {
            throw new Error("Error creating post: " + error.message);

        }

    }


};
module.exports = PostModels;