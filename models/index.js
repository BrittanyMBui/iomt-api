const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB hella connected ur buggin'))
    .catch((err) => console.log(err));

module.exports = {
    User: require('./User'),
    Post: require('./Post'),
};