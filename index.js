require("../../builds/devel/pskruntime.js");
require("callflow");
var pskcrypto = require("pskcrypto");

/*
    class for Command or Result transactions
 */
function CRTransaction(swarmType, command, input, output, currentPulse) {

    if(!command){
        this.input      = input;
        this.output     = output;
    } else {
        this.command      = command;
    }

    var arr = process.hrtime();
    this.second     = arr[0];
    this.nanosecod  = arr[1];

    this.CP         = currentPulse;
    this.digest     = pskcrypto.hashValues(this);
}

exports.createTransaction = function (currentPulse, swarm) {
    return new Transaction(currentPulse, swarm);
}

module.exports = {
    init:function(worldStateCache, historyStorage){
        return require("./pskdb").startDB();
    },
    createHistoryStorage:function(storageType,...args){
        return require("./historyStorages").create(storageType,args);
    },
    createWorldStateStorage:function(storageType,...args){
        return require("./worldStateStorages").create(storageType,args);
    },
    createCRTransaction:function(storageType,...args){
        return require("./worldStateStorages").create(storageType,args);
    }
}