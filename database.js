const mongoose = require("mongoose");


class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://lkthorn:TwitterClone@twitterclonecluster.12wgzl0.mongodb.net/TwitterCloneDb?retryWrites=true&w=majority") 

        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error" + err);
        })

    }
}

module.exports = new Database();