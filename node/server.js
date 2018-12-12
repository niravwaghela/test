const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./routes/api");
const mongoose = require("mongoose");
const PORT = 3003;

const app = express();
app.use(bodyParser.json());
app.use(cors());

let db = "mongodb://localhost:27017/event-registration";

mongoose.connect(
    db,
    err => {
        if (err) {
            console.err("Error" + err);
        } else {
            console.log("connected to mongodb");
        }
        app.use("", api);
    }
);

app.listen(PORT, () => {
    console.log("server running on local host:" + PORT);
});
