'use strict';

const path = require('path');
const filesPath = path.join(__dirname, '../../files');
const stellar = require('../api-calls/stellar');
const kraken = require('../api-calls/kraken');

const { readFromFile, writeToFile } = require('../utils/file-utils');

// read account info from file if exists, otherwise call api and retrieve it
const getAccountInfo = async (accountId) => {
    let fileContent = readFromFile(`${filesPath}/accountInfo.json`);

    // file was not found, call api and get data
    if(fileContent.error){
        let response = await stellar.getAccountInfo(accountId);

        if(response.error){
            return response.error;
        }

        // write accountInfo to file
        writeToFile(`${filesPath}/accountInfo.json`, response.data);

        // return accountInfo data
        return response.data;
    }

    return fileContent.data;
};

module.exports = {
    getAccountInfo
};