const { getAccountInfo, getPaymentsForAccount } = require('./src/Stellar/stellar');
const { getAssetPairs, getTickerInfo } = require('./src/Kraken/kraken');
const { stellar, kraken } = require('./files/keys.json');
const { writeToFile, readFromFile } = require('./src/utils');
const path = require('path');

const pair = 'XXLMZEUR';

const filesPath = path.join(__dirname, '/files');

const payments = readFromFile(`${filesPath}/payments.json`);
const accountInfo = readFromFile(`${filesPath}/accountInfo.json`);


getAccountInfo(stellar.accountId, ({ body }) => {
    const data = {
        accountId: body.account_id,
        inflationDestination: body.inflation_destination,
        balanceXLM: body.balances[0].balance
    };

    getTickerInfo(pair, (error, response) => {
        if(error) { return console.dir(error); }

        const prices = response.body.result[pair];
        const ask = prices.a[0];

        data.balanceEUR =  data.balanceXLM * ask;

        console.dir(data);
    });



});

//     writeToFile(path.join(__dirname, '/files/accountInfo.json'), data);
// });

// const limit = 100;
// const order = 'desc';

// getPaymentsForAccount(stellarAccount, { limit, order }, (error, response) => {
//     if(error){
//         return console.dir(error);
//     }

//     const { records } = response.body._embedded;

//     const data = records.map(record => {
//         return {
//             transactionId: record.transaction_hash,
//             successful: record.transaction_successful,
//             source: record.from,
//             destination: record.to,
//             amount: record.amount
//         };
//     });

//     writeToFile('payments', data);
// });

// getAssetPairs((error, response) => {
//     if(error) { return console.dir(error); }

//     const assetPairs = Object.keys(response.body.result);
//     return console.dir(assetPairs);
// });