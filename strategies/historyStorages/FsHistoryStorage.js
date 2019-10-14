const LatestHashTracker = require("./LatestHashTracker");

function FsHistoryStorage(folder) {
    const blocksPath = folder + "/blocks";
    let lht = new LatestHashTracker();
    this.getHashLatestBlock = lht.getHashLatestBlock;

    let fs = require("fs");

    fs.mkdir(blocksPath, function (err) {
    });

    this.appendBlock = function (block, announceFlag, callback) {
        console.log("Writing block:", block.pulse);
        fs.writeFile(blocksPath + "/index", block.pulse.toString(), $$.logError);
        fs.writeFile(blocksPath + "/" + block.pulse, JSON.stringify(block, null, 1), callback);
        lht.update(block.pulse, block);
    };

    this.getLatestBlockNumber = function (callback) {
        fs.readFile(blocksPath + "/index", function (err, res) {
            let maxBlockNumber = 0;
            if (err) {
                callback(err);
            } else {
                maxBlockNumber = parseInt(res);
                callback(null, maxBlockNumber);
            }
        });
    };

    this.loadSpecificBlock = function (blockNumber, callback) {
        fs.readFile(blocksPath + "/" + blockNumber, function (err, res) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, JSON.parse(res));
                lht.update(res.pulse, res);
            }
        });
    };

    ////////////////////////
    let observer;
    //send to callback all blocks newer then fromVSD
    this.observeNewBlocks = function (fromVSD, callback) {
        observer = callback;
    }
}

module.exports = FsHistoryStorage;
