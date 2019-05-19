'use strict';

const fs = require('fs');

const writeToFile = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data), err => {
        if(err) return console.log(err);

        console.log(`Data written to ${fullPath}`);
    });
};

// read data from file and return it
const readFromFile = file => JSON.parse(fs.readFileSync(file).toString());

// round number 
const round = (input, places) => Number.parseFloat(input).toFixed(places);

module.exports = {
    writeToFile,
    readFromFile,
    round
}