'use strict';
const { parseData, filterData, getPairs } = require('./src/helpers');
const rawData = parseData('files/trades.csv');
let filteredData = filterData(rawData);
const pairs = getPairs(filteredData);
const kraken = require('./src/kraken');
const utils = require('./src/utils');

// get current data
kraken.getCurrentData('XLMEUR');
const currentData =  utils.readFromFile('currentData');


let data = {};

// create new empty objects for each pair in data
pairs.forEach(p => data[p] = []);

// fill those objects with data filtered by pair
filteredData.forEach(d => {
    if(d.pair === 'XXLMZEUR' && d.type === 'buy'){
        const worthToday = utils.round(d.coinsBought * currentData.bid, 5);
        d.worthToday = worthToday;

        d.PL = utils.round(worthToday - d.paid, 5);
        data[d.pair].push(d)
    }
});

let total = 0;
data.XXLMZEUR.forEach(d => {
    total += +d.PL;
});

console.table(data.XXLMZEUR);
console.log(total);



