'use strict';

const csvtoarray = require('csvtoarray');
const { round } = require('./utils');
// make json structure from csv
const parseData = (file) => {
    const array = csvtoarray.csvfile2array(file);
    const columns = array[0];

    let data = [];

    for(let i = 1; i < array.length; i++){
        let trade = {};

        for(let j = 0; j < columns.length; j++){
            trade[columns[j]] = array[i][j];
        }
    
        data.push(trade);
    }

    return data;
};

const filterData = (data) => {
    return data.map(trade => {
        return {
            pair: trade.pair,
            date: trade.time.slice(0,10),
            type: trade.type,
            orderType: trade.ordertype,
            price: round(trade.price, 5),
            fee: round(trade.fee, 5),
            coinsBought: round(trade.vol, 5),
            paid: round(trade.cost, 5)
        };
    });
};

const getPairs = (data) => {
    let result = [];

    data.forEach(d => {
        if(!result.includes(d.pair)){
            result.push(d.pair);
        }
    });

    return result;
}


module.exports = {
    parseData,
    filterData,
    getPairs
};