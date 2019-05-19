'use strict';

const request = require('request-promise');

const getAssetPairs = async() => {
    const url = 'https://api.kraken.com/0/public/AssetPairs';
    return await request({ url, json: true });
};

const getTickerInfo = async(pair) => {
    const url = `https://api.kraken.com/0/public/Ticker?pair=${pair}`
    return await request({ url, json: true });
};

module.exports = {
    getAssetPairs,
    getTickerInfo
};