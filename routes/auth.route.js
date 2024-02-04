const express = require('express');
const router = express.Router();

const {
    validateSignup
} = require('../middleware/validate.auth.middleware');

const {
    handleValidationErrors
} = require('../middleware/validation.middleware');

const { Signup } = require('../controller/auth.controller');

router.post('/signup', validateSignup, handleValidationErrors, Signup );

module.exports = router;