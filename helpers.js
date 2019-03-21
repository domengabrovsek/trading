'use strict';

const csvtoarray = require('csvtoarray');

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

    return { data, columns };
};

const filterData = (data) => {
    data.map(trade => {
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
};




module.exports = {
    parseData
};