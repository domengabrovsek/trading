const request = require('request');

const getAssetPairs = (callback) => {
    const url = 'https://api.kraken.com/0/public/AssetPairs';
    request({ url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect!', undefined);
        } else {
            callback(undefined, response);
        }
    });
};

const getTickerInfo = (pair, callback) => {
    const url = `https://api.kraken.com/0/public/Ticker?pair=${pair}`
    request({ url, json: true }, (error, response) => {
        if(error){
            return callback('Unable to connect!', undefined);
        } else {
            return callback(undefined, response);
        }
    });
};

module.exports = {
    getAssetPairs,
    getTickerInfo
};