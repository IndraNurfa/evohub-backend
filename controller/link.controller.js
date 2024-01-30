const logger = require('../log/logger');
const Link = require('../model/link.model');
const {
    nanoid
} = require('nanoid');

const addLink = async (req, res) => {
    const id = nanoid(6);
    const shortLink = new Link({
        urlId: id,
        link: req.body.link
    });

    try {
        const shortLinkSave = await shortLink.save();
        res.status(200).json({
            message: "Short Link saved successfully",
            comment: shortLinkSave
        });
    } catch (error) {
        logger.error(error.message);
        res.status(400).json({
            message: error.message
        });
    }
};

const getLink = async (req, res) => {
    try {
        const data = await Link.findOne({
            urlId: req.params.id
        }).select('link');
        res.status(200).json(data);
    } catch (error) {
        logger.error(error.message);
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    addLink,
    getLink
};