const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const controls = require("../controllers/authentication");
const operation = require("../operations/cruds");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(cors());

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json("unauthorized request");
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === "null") {
        res.status(401).json("unauthorized request");
    }
    let payload = jwt.verify(token, "itiswhatitis");
    if (!payload) {
        res.status(401).json("unauthorized request");
    }
    req.user_id = payload.subject;
    next();
}

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

router.post("/deleteEvent", verifyToken , (req, res) => {
    const operate = new operation();
    
    let eventId = req.body;
    
    operate
        .deleteEvent(eventId)
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });

});
router.post("/myEvents", (req, res) => {
    const operate = new operation();
    let loggedIn = req.body;
    operate
        .myEvents(loggedIn)
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

router.post("/eventsss", verifyToken, (req, res) => {
    const operate = new operation();
    let users = req.body;

    operate
        .registerUser(users)
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.post("/editEvent", (req, res) => {
    const operate = new operation();
    let eventId = req.body;

    operate
        .editEvent(eventId)
        .then(resp => {
            res.status(200).json(resp);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.post("/events", verifyToken, (req, res) => {
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
router.get("/events", verifyToken, (req, res) => {
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
