'use strict';

const url    = require('url');
const router = require('express').Router();
const axios  = require('axios');

const API_ORIGIN = 'http://193.24.223.251:3003';

/* GET main page. */
router.get('*', async (req, res, next) => {
    try {
        const result = await axios.get(formUrl(req.originalUrl));

        res.send(result.data);
    } catch (error) {
        next(error);
    }
});

router.post('*', async (req, res, next) => {
    try {
        await axios.post(formUrl(req.originalUrl), req.body);

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

router.delete('*', async (req, res, next) => {
    try {
        await axios.delete(formUrl(req.originalUrl));

        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

function formUrl (path) {
    return url.resolve(API_ORIGIN, path);
}
