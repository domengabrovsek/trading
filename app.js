const { getAccountInfo } = require('./src/Stellar/stellar');
const { getAssetPairs, getTickerInfo } = require('./src/Kraken/kraken');
const { stellarAccount } = require('./files/keys.json');
const pair = 'XXLMZEUR';

getAccountInfo(stellarAccount, ({ body }) => {
    console.dir({
        accountId: body.account_id,
        inflationDestination: body.inflation_destination,
        balance: body.balances[0].balance,
        currency: 'XLM'
    });
});

getAssetPairs((error, response) => {
    if(error) { return console.dir(error); }

    const assetPairs = Object.keys(response.body.result);
    return console.dir(assetPairs);
});

getTickerInfo(pair, (error, response) => {
    if(error) { return console.dir(error); }

    const prices = response.body.result[pair];
    return console.dir(prices);
});