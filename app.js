const express = require('express');
const mongoose = require('mongoose');
const {
    connect
} = require('./config/db.config');

require("dotenv").config();
const {
    PORT
} = process.env;

const app = express();

connect();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});