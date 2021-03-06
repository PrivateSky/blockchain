


var cutil = require("../../../signsensus/lib/transactionsUtil.js");

var assert = require('double-check').assert;

function generateTransactions(noTransactions){
    var transactions = [];
    for(var i=0; i<noTransactions; i++){
        var t = {};
        t.digest="T"+i;
        t.transactionPulse = cutil.getRandomInt(5);
        transactions.push(t);
    }
    return transactions;
}

var trans=generateTransactions(10);
assert.equal(trans.length, 10, "Wrong transactions vector")