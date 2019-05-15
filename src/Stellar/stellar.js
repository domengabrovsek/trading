'use strict';

const request = require('request');

const getAccountInfo = (accountId, callback) => {
    const url = `https://horizon.stellar.org/accounts/${accountId}`;

    request({ url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect!', undefined);
        } else {
            callback(response);
        }
    });
};

module.exports = {
    getAccountInfo
};