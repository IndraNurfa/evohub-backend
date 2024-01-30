const express = require('express');
const router = express.Router();

const {
    addLink,
    getLink
} = require('../controller/link.controller');

router.post("/addLink", addLink);
router.get("/:id", getLink);


module.exports = router;