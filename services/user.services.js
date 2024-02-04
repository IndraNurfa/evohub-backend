const bcrypt = require('bcrypt');
const { createSecretToken } = require('../util/token.util');
const userRepository = require('../repository/user.repository');

async function signupUser(userData) {
    const { email, password } = userData;

    const existingUser = await userRepository.findUserByEmail(email);

    if (existingUser) {
        throw new Error('Email aldeady registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepository.createUser({ email, password: hashedPassword });

    const token = createSecretToken(user._id);
    return { token, user };
}

module.exports = { signupUser };