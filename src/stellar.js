const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const account = 'GA2DYTDSCLFUCR63JW6FFZ3RLAT2EJZVVEMHFW2LR72PFOTSCXFLCDNZ';


function getTransactions (account, server) {
  let result, error;

  server.transactions()
    .forAccount(account)
    .call()
    .then(accountResult => 
      { 
        //result = accountResult; 
        console.log(accountResult); 
      })
    .catch(err => { error = err; })

};

server.transactions()
    .forAccount(account)
    .call()
    .then(accountResult => 
      { 
        //result = accountResult; 
        console.log(accountResult); 
      })
    .catch(err => 
      { 
        console.log(err); 
      });

