const logger = require('../log/logger');
const userService = require('../services/user.services');

const Signup = async (req, res) => {
    try {
        logger.info('Signup::', req.body);
        const userData = req.body;
        const { token } = await userService.signupUser(userData);
        res.status(201).json({
            status: true,
            message: 'User berhasil signup',
            data: { token: token }
        });
    } catch (error) {
        logger.error(error.message);
        if (error.message.includes('Email already registered')) {
            return res
                .status(400)
                .json({ status: false, message: 'Email sudah terdaftar.' });
        }
        return res
            .status(500)
            .json({ status: false, message: 'Internal server error.' });
    }
};

module.exports = { Signup };
