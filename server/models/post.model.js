const BaseModal = require("./Base.model");
const { QueryReducer } = require("../utils/index");

class PostModels extends BaseModal {

    constructor(date) {
        super();
        this.date = date;
    }

    async getPosts(id) {
        try {
            let getQuery = 'SELECT id, post_title,post_excerpt,post_status,post_publish_date FROM post';
            if (id) {
                let getSelectPost = `SELECT P.id, P.category_id, P.post_title, P.post_content, P.post_thumbnail, PC.category as post_category
                                    FROM post P
                                    RIGHT JOIN post_category PC
                                    ON P.category_id = PC.id
                                    WHERE P.id = ?`;
                return await this.excutingQuery(getSelectPost, id);
            }
            return await this.excutingQuery(getQuery);
        } catch (error) {
            throw new Error("Error fetching posts: " + error.message);
        }
    }

    async getPostBySlug(slug) {
        try {
            let getPostBySlugQuery = `SELECT P.id, P.post_title, P.post_excerpt, P.post_content, P.post_thumbnail, 
                                      PC.category as post_category, P.post_publish_date
                                      FROM post P
                                      LEFT JOIN post_category PC ON P.category_id = PC.id
                                      WHERE P.post_slug = ?`;

            return await this.excutingQuery(getPostBySlugQuery, slug);
        } catch (error) {
            throw new Error("Error fetching post by slug: " + error.message);
        }
    }

    async createPost(data) {
        try {
            let columnsName = ['post_title', 'post_slug', 'post_excerpt', 'post_content', 'post_thumbnail', 'category_id', 'post_publish_date'];
            let values = QueryReducer(columnsName);

            let createQuery = `INSERT INTO post (${columnsName}) VALUES (${values})`;
            const processData = [...data, this.date];

            return await this.excutingQuery(createQuery, processData);
        } catch (error) {
            throw new Error("Error creating post: " + error.message);
        }
    }

    async insertCategoryRelation(data) {
        try {
            const processData = [...data, this.date];
            let columnsName = ['post_id', 'category_id', 'date'];
            let values = QueryReducer(columnsName);

            let insertQuery = `INSERT INTO category_relation (${columnsName}) VALUES (${values})`;
            return await this.excutingQuery(insertQuery, processData);
        } catch (error) {
            throw new Error("Error creating category relation: " + error.message);
        }
    }

    async deletePost(id) {
        try {
            let deleteQuery = 'DELETE FROM post WHERE id = ?';
            return await this.excutingQuery(deleteQuery, id);
        } catch (error) {
            throw new Error("Error deleting post: " + error.message);
        }
    }
}

module.exports = PostModels;
