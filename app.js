const express = require('express');
const logger = require('./log/logger');
const bodyParser = require('body-parser');
const {
    connect
} = require('./config/db.config');
const linkRoute = require('./routes/link.route');
const authRoute = require('./routes/auth.route');

require('dotenv').config();
const {
    PORT
} = process.env;

const app = express();

connect();

app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`);
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/auth', authRoute);
app.use('/', linkRoute);