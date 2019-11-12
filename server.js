const express = require('express')
const bodyParser = require('body-parser')

const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
const app = express();

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Could not connect to the database. Exititng now...");
    process.exit();
});

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.json({"message":"Welcome"});
});

// Require Notes routes
require('./app/routes/vendors.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});