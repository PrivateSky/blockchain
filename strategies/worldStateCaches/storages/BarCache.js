const StorageContainer = require("./StorageContainer");

function BarCache(archive) {
    let storage = new StorageContainer();
    this.readKey = storage.readKey;
    this.writeKey = storage.writeKey;
    this.updateAliases = storage.updateAliases;

    //just in case the folder got to use as storage does not exist

    const worldStateCachePath = "/worldStateCache";

    this.getState = function (callback) {
        archive.readFile(worldStateCachePath, function (err, res) {
            let objRes = {};
            if (err) {
                callback(err, objRes);
                console.log("Initialisating empty blockchain state");
            } else {
                objRes = JSON.parse(res);
                storage.pskdb = objRes.pskdb;
                storage.keys = objRes.keys;
                storage.pulse = objRes.pulse;
                callback(null, storage.pskdb);
            }
        });
    };

    this.updateState = function (internalValues, callback) {
        storage.pskdb = internalValues;
        archive.writeFile(worldStateCachePath, JSON.stringify(storage, null, 1), callback);
    };

    this.dump = function () {
        console.log("EDFSCache:", storage);
    };
}

module.exports = BarCache;
