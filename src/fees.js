'use strict';
// returns total fee for pair
const getFee = (data, pair) => {
    let totalFee = 0;
    data.forEach(d => {
        if(d.pair === pair){
            totalFee += d.fee;
        }
    });

    return { totalFee, pair };
};

// returns total fee for all pairs
const getTotalFee = (data) => {
    let totalFee = 0;
    data.forEach(d => totalFee += d.fee);
    return totalFee
}

module.exports = {
    getFee,
    getTotalFee
};