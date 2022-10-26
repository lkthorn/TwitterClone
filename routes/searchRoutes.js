const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const User = require('../schemas/UserSchema');

router.get("/", (req, res, next) => {

    var payload = createPayload();    
    res.status(200).render("searchPage", payload);
})

router.get("/:selectedTab", (req, res, next) => {

    var payload = createPayload();    
    payload.selectedTab = req.params.selectedTab;
    res.status(200).render("searchPage", payload);
})

function createPayload() {
    return {
        pageTitle: "Search", 
        userLoggedIn: req.session.user, 
        userLoggedInJs: JSON.stringify(req.session.user)
    };
}

module.exports = router;