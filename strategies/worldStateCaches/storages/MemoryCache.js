const StorageContainer = require("./StorageContainer");

function MemoryCache() {
    let storage = new StorageContainer();
    this.readKey = storage.readKey;
    this.writeKey = storage.writeKey;
    this.updateAliases = storage.updateAliases;

    this.getState = function (callback) {
        //err, valuesFromCache
        callback(null, storage.pskdb);
    };

    this.updateState = function (internalValues, callback) {
        //console.info("Commiting state in memory cache "/*, internalValues*/)
        storage.pskdb = internalValues;
        storage.pulse = internalValues.pulse;
        setImmediate(() => {
            callback(null, storage.pskdb);
        });
    };

    this.dump = function () {
        console.log("MemoryCache:", storage);
    };
}

module.exports = MemoryCache;
