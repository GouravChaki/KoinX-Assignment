const express = require('express');
const tradeRoutes = require('./tradeRoutes');

const router = express.Router();

router.use('/trades', tradeRoutes);

module.exports = router;
