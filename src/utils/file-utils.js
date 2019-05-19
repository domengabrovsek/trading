'use strict';

const fs = require('fs');

// write data to file
const writeToFile = (file, data) => {
    fs.writeFileSync(file, JSON.stringify(data), err => {
        if(err) return console.log(err);

        return fullPath;
    });
};

// read data from file and return it
const readFromFile = (file) => {
    let result = {};

    try { result.data = JSON.parse(fs.readFileSync(file).toString()); } 
    catch (err){ result.error = err; }

    return result;
};

module.exports = {
    writeToFile,
    readFromFile
}