const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: "uabadabdabdubdub",
    cookie: { maxAge: 3000000000 }
}));

app.get("/", (req, res) => {
    res.render("home");
})

app.listen(3030, () => {});