const express = require('express');
const router = express.Router();

const {
    addLink
} = require('../controller/link.controller');

router.post("/addLink", addLink);


module.exports = router;