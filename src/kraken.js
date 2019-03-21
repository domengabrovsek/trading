'use strict';

const rp = require('request-promise');
const { writeToFile, readFromFile } = require('./utils');

const getCurrentData = (pair) => {
    const uri = `https://api.kraken.com/0/public/Ticker?pair=${pair}`
    const json = true;
    const headers = { 'User-Agent': 'Request-Promise' };
    const request = { uri, headers, json };

    console.log(request.uri);
    rp(request)
        .then(response => {
            let prices = response.result.XXLMZEUR;
            let data = {
                ask: prices.a[0],
                bid: prices.b[0],
                low: prices.l[0],
                high: prices.h[0],
                open: prices.o
            };
            writeToFile('currentData', data);
        })
        .catch(err => console.log(err))
}

module.exports = {
    getCurrentData
};