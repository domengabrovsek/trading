'use strict';

const { parseData, getTotalFee } = require('./helpers');
const { data, columns } = parseData('sources/trades.csv');
// get all traded pairs

const filteredData = data.map(trade => {
    return {
        pair: trade.pair,
        time: trade.time,
        type: trade.type,
        orderType: trade.ordertype,
        price: trade.price,
        paid: trade.cost,
        fee: trade.fee,
        coinsBought: trade.vol
    };
});

const pairs = filteredData.map(d => d.pair);

// overall stats
let stats = {};

pairs.forEach(pair => {
    stats[pair] = {};
})


stats.totalFeePaid = getTotalFee(filteredData.map(d => d.fee));



console.table(filteredData);


console.table(stats);