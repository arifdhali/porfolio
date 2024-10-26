const connection = require("../config/config");
class BaseModal {

    // MAKE THIS PRIVATE FOR OTHERS CONTROLLERS
    #ProcessDatabase(query, data) {
        
        return new Promise((resolve, reject) => {
            connection.query(query, data, (err, result) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
            })
        })

    }

    // making this for usage processDatabase
    excutingQuery(query, processData) {
        return this.#ProcessDatabase(query, processData);
    }


}

module.exports = BaseModal;