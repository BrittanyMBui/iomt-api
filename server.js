require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const usersController = require('./controllers/usersController');

const PORT = process.env.PORT || 4000;
const app = express();

// MIDDLEWARE

// CORS
app.use(cors())
// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// SESSION
app.use(session({
    secret: "secrets are no fun",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 4,
    },
}));






// HOME ROUTE
app.get('/', (req, res) => {
    res.send('<h1>IOMT</h1>')
})


app.listen(PORT, () => {
    console.log(`Local host is listening at ${PORT}`);
})