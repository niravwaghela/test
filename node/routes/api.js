const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const controls = require("../controllers/authentication");
const operation = require("../operations/cruds");

app.use(bodyParser.json());
app.use(cors());


router.get("/", (req, res) => {
    res.send("from api route");
});

router.post("/signUp", (req, res) => {
const control = new controls();

    let { firstName, lastName, email, password } = req.body;
    control
        .signUp({ firstName, lastName, email, password })
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.post("/login", (req, res) => {
const control = new controls();

    const userData = req.body;
    return control
        .login(userData)
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });
}); 

router.post("/eventsss", (req, res) => {
    const operate = new operation();
    let users = req.body
    
    operate
        .registerUser(users)
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });

        
});

router.post("/events", (req, res) => {
    const operate = new operation();
    let eventData = req.body;

    operate
        .registerEvent(eventData)
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});
router.get("/events", (req, res) => {
    const operate = new operation();
    operate
        .getEvents()
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});
module.exports = router;
