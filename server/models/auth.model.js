const BaseModal = require("./Base.model");

class AuthModels extends BaseModal {
    constructor(date, time) {
        super();
        this.date = date;
        this.time = time;
    }

    async loginModels(email, password) {
        try {
            let processData = [
                email,
                password
            ];
            let loginQuery = 'SELECT id FROM users WHERE email = ? AND password = ?';
            let res = await this.excutingQuery(loginQuery, processData);

            if (res.length > 0) {
                let user = res[0];
                let insertData = [
                    this.date,
                    this.time,
                    user.id
                ];
                let updateQuery = 'UPDATE users SET login_date = ?, last_login = ? WHERE id = ?';
                await this.excutingQuery(updateQuery, insertData);
                return user;
            }
            else {
                throw new Error("Incorrect email or password.");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }




}

module.exports = AuthModels;