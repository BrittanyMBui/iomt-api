const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/iomt';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => console.log('MongoDB hella connected'))
    .catch((err) => console.log(err));

module.exports = {
    User: require('./User'),
    Post: require('./Post'),
    Content: require('./Content')
};