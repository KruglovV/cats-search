const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    description: String,
    missingSince: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Cat', dogSchema);
