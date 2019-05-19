
const { getAssetPairs, getTickerInfo } = require('./src/api-calls/kraken');
const { getPaymentsForAccount } = require('./src/api-calls/stellar');
const { stellar } = require('./files/keys.json');
const { getAccountInfo } = require('./src/utils/utils');

getAccountInfo(stellar.accountId)
    .then((response, error) => {
        if(error){
            return console.dir(error);
        }

        return console.dir(response);
    });

// max is 200
const limit = 200;
const order = 'desc';

getPaymentsForAccount(stellar.accountId, { limit, order })
    .then((response, error) => {
        if(error){
            return console.dir(error);
        }

        return console.dir(response);
    });

// const pair = 'XXLMZEUR';
// const tickerInfo = getTickerInfo(pair).then((response, error) => {
//     if(error) {
//         return console.log(error);
//     }
// });