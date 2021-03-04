require('dotenv').config();
const express = require('express');
require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const controllers = require('./controllers');
const routes = require('./routes');

const PORT = process.env.PORT || 4000;
const app = express();


////////////////////// MIDDLEWARE

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// CORS
app.use(cors());
// SESSION
app.use(session({
    secret: "secrets are no fun",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 4,
    },
}));
// ROUTES
app.use('/iomtapi/v1/users', routes.users);
app.use('/iomtapi/v1/posts', routes.posts);
//////////////////////////////////


// HOME ROUTE
app.get('/', (req, res) => {
    res.send('<h1>IOMT</h1>')
});


app.listen(PORT, () => {
    console.log(`Local host listening at ${PORT}`);
});