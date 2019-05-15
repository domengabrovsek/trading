'use strict';

const fs = require('fs');

const writeToFile = (file, rawData) => {
    const fullPath = `files/${file}.json`;
    const data = JSON.stringify(rawData);
    fs.writeFileSync(fullPath, data, err => {
        if(err) console.log(err);
    });
};

const readFromFile = (file) => {
    const fullPath = `files/${file}.json`;
    const data = JSON.parse(fs.readFileSync(fullPath).toString());
    return data;
};

const round = (input, places) => Number.parseFloat(input).toFixed(places);

module.exports = {
    writeToFile,
    readFromFile,
    round
}