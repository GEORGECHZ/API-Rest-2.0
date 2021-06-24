let router = require("express").Router();

let workers = require('./workers');
router.use('/workers', workers);

module.exports = router;