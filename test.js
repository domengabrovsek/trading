const { getAccountInfo, getPaymentsForAccount } = require('./src/Stellar/stellar');
const { getAssetPairs, getTickerInfo } = require('./src/Kraken/kraken');
const { stellarAccount } = require('./files/keys.json');
const pair = 'XXLMZEUR';

// getAccountInfo(stellarAccount, ({ body }) => {
//     console.dir({
//         accountId: body.account_id,
//         inflationDestination: body.inflation_destination,
//         balance: body.balances[0].balance,
//         currency: 'XLM'
//     });
// });

const limit = 100;
const order = 'desc';

getPaymentsForAccount(stellarAccount, { limit, order }, (error, response) => {
    if(error){
        return console.dir(error);
    }

    const { records } = response.body._embedded;

    const data = records.map(record => {
        return {
            transactionId: record.transaction_hash,
            successful: record.transaction_successful,
            source: record.from,
            destination: record.to,
            amount: record.amount
        };
    });

    console.dir(data);
});

// getAssetPairs((error, response) => {
//     if(error) { return console.dir(error); }

//     const assetPairs = Object.keys(response.body.result);
//     return console.dir(assetPairs);
// });

// getTickerInfo(pair, (error, response) => {
//     if(error) { return console.dir(error); }

//     const prices = response.body.result[pair];
//     return console.dir(prices);
// });