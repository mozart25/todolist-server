

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

require("./app/routes/tutorial.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:3001"
};

// app.use(cors(corsOptions));
// app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Database with { force: true }');
//     initial();
// });


app.get("/", (req, res) => {
    res.json({ message: "Welcome to lee's application." });
});



// require("./app/routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}