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

const getPaymentsForAccount = (accountId, options, callback) => {
    const { limit, order} = options;
    const url = `https://horizon.stellar.org/accounts/${accountId}/payments?limit=${limit}&order=${order}`

    request({ url, json: true }, (error, response) => {
        if(error) { 
            return callback('Unable to connect!', undefined); 
        } else { 
            return callback(undefined, response); 
        }
    }); 
};

module.exports = {
    getAccountInfo,
    getPaymentsForAccount
};