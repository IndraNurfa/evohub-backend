const User = require('../model/user.model');
const logger = require('../log/logger');

async function createUser(user) {
    let data = [];
    try {
        data = await User.create(user);
    } catch (error) {
        logger.error(error.message);
    }
    return data;
}

async function findUserByEmail(email) {
    let data = {};
    try {
        data = await User.findOne({ email });
    } catch (error) {
        logger.error(error.message);
    }
    return data;
}

module.exports = { createUser, findUserByEmail };