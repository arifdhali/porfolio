let BaseModal = require("./Base.model");
class CategoryModel extends BaseModal {

    constructor(date) {
        super();
        this.date = date
    }

    // HANDLE POST 
    async postCategory(reciveDate) {
        try {
            const { data } = reciveDate;
            let insertQuery = 'INSERT INTO post_category(category,create_date) VALUES(?,?)';

            let processData = [
                data,
                this.date
            ]
            let response = await this.excutingQuery(insertQuery, processData);
            return response;
        } catch (error) {
            throw new Error("Failed to create category: " + error.message);
        }
    }

    // HANDLE GET 
    async getCategory() {
        try {
            let getQuery = `
                SELECT 
                    pc.id AS category_id,
                    pc.category,
                    COUNT(p.id) AS post_count,
                    pc.create_date
                FROM 
                    post_category pc
                LEFT JOIN 
                    post p ON pc.id = p.category_id
                GROUP BY 
                    pc.id, pc.category, pc.create_date
            `;
            
            let response = await this.excutingQuery(getQuery);
    
            return response;
        } catch (error) {
            throw new Error("Failed to get category: " + error.message);
        }
    }
    


    // HANDLE DELTE
    async deleteCateogry(id) {
        let deleteQuery = 'DELETE FROM post_category WHERE id= ?';
        try {
            let response = await this.excutingQuery(deleteQuery, id);
            return response;
        } catch (error) {
            throw new Error("Failed to delete category: " + error.message);
        }
    }


    // HANDLE UPDATE 

    async updateCategory(reciveDate) {
        const { id, data } = reciveDate;
        let updateQuery = 'UPDATE post_category SET category = ? WHERE id = ?';
        const processData = [
            data,
            id
        ]
        try {
            let response = await this.excutingQuery(updateQuery, processData);
            return response;
        } catch (error) {
            throw new Error("Failed to update category: " + error.message);
        }

    }
}

module.exports = CategoryModel;
