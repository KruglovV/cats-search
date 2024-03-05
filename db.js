const mongoose = require('mongoose');

const connectionURL = 'mongodb://localhost:27017/catsAndDogsDatabase';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log(error));
