const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: [true, 'Link is empty']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: String
    }
});

module.exports = mongoose.model('Link', linkSchema);