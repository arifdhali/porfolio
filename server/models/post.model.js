const BaseModal = require("./Base.model");
const { QueryReducer } = require("../utils/index");

class PostModels extends BaseModal {

    constructor(date) {
        super();
        this.date = date
    }

    async getPosts(id) {
        try {
            let getQuery = 'SELECT id, post_title,post_content,post_status,post_publish_date FROM post';
            if (id) {
                let getSelectPost = `SELECT P.id, P.category_id, P.post_title, P.post_content, P.post_thumbnail, PC.category as post_category
                                    FROM post P
                                    RIGHT JOIN post_category PC
                                    ON P.category_id = PC.id
                                    WHERE P.id = ?`;
                ;
                return await this.excutingQuery(getSelectPost, id);
            }
            return await this.excutingQuery(getQuery);
        } catch {
            throw new Error("Error Edit post: " + error.message);
        }

    }

    async createPost(data) {
        try {

            let columnsName = ['post_title', 'post_slug', 'post_excerpt', 'post_content', 'post_thumbnail', 'category_id', 'post_publish_date'];
            let values = QueryReducer(columnsName);

            let createQuery = `INSERT INTO post (${columnsName}) VALUES (${values})`;
            const processData = [
                ...data,
                this.date
            ]
            return await this.excutingQuery(createQuery, processData);

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
            return await this.excutingQuery(inertQuery, processData);

        } catch (error) {
            throw new Error("Error creating post: " + error.message);

        }

    }


};
module.exports = PostModels;