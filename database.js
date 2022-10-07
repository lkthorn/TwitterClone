const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindandModify', false);


class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://lkthorn:LiMa0127@twitterclonecluster.bxa4jo5.mongodb.net/?retryWrites=true&w=majority")

        .then(() => {
            console.log("database connection successful");
        })
        .catch((err) => {
            console.log("database connection error" + err);
        })

    }
}

module.exports = new Database();