'use strict';

const request = require('request-promise');

const getAccountInfo = async(accountId) => {
    const url = `https://horizon.stellar.org/accounts/${accountId}`;

    let response = {};

    try{
        response = await request({ url, json: true });
        response.data = {
            accountId: response.account_id,
            inflationDestination: response.inflation_destination,
            balance: response.balances[0].balance,
            currency: 'XLM'
        };
    } catch(err){
        response.error = err.error;
    }

    return response
};

const getPaymentsForAccount = async (accountId, options) => {
    const { limit, order} = options;
    const url = `https://horizon.stellar.org/accounts/${accountId}/payments?limit=${limit}&order=${order}`

    let result = {};

    try{
        let response = await request({ url, json: true });

        const { records } = response._embedded;

        result.data = records.map(record => {
            return {
                transactionId: record.transaction_hash,
                successful: record.transaction_successful,
                source: record.from,
                destination: record.to,
                amount: record.amount
            };
        });
    } catch(err){
        result.error = err.error;
    }

    return result;
};

module.exports = {
    getAccountInfo,
    getPaymentsForAccount
};