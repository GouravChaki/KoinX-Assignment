// services/tradeService.js
const fs = require('fs');
const csvParser = require('../utils/csvParser');
const Trade = require('../models/trade');

module.exports = async (filePath) => {
    const results = await csvParser(filePath);

    const uniqueTrades = [];
    const tradeKeys = new Set();

    results.forEach(trade => {
        const tradeKey = `${trade.utcTime}-${trade.operation}-${trade.market}-${trade.amount}-${trade.price}`;
        if (!tradeKeys.has(tradeKey)) {
            tradeKeys.add(tradeKey);
            uniqueTrades.push(trade);
        }
    });

    //to remove duplicate entry of data
    //if same data row exists then it won't take this entry
    for (const trade of uniqueTrades) {
        const existingTrade = await Trade.findOne({
            utcTime: trade.utcTime,
            operation: trade.operation,
            market: trade.market,
            amount: trade.amount,
            price: trade.price,
        });

        if (!existingTrade) {
            await Trade.create(trade);
        }
    }

    fs.unlinkSync(filePath); // Remove the uploaded file
};
