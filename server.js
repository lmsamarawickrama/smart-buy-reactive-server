const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require('dotenv');
const db = require("./src/app/models");
//const swaggerUi = require('swagger-ui-express')m
//const swaggerFile = require('./swagger_output.json')

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

dotEnv.config();

require("./src/app/routes/supermarket/supermarket.routes")(app);

const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

//app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Smart Buy Server application." });
});
