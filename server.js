const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:3001"
};

// app.use(cors(corsOptions));
app.use(cors());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to lee's application." });
});

require("./app/routes/tutorial.routes")(app);
// require("./app/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});