const LatestHashTracker = require("./LatestHashTracker");

function BarHistoryStorage(archive) {
    const blocksPath = "blocks";
    let lht = new LatestHashTracker();
    this.getHashLatestBlock = lht.getHashLatestBlock;

    const path = require("path");
    this.appendBlock = function (block, announceFlag, callback) {
        archive.writeFile(path.join(blocksPath, "index"), block.pulse.toString(), $$.logError);
        archive.writeFile(path.join(blocksPath, block.pulse), JSON.stringify(block, null, 1), callback);
        lht.update(block.pulse, block);
    };

    this.getLatestBlockNumber = function (callback) {
        archive.readFile(path.join(blocksPath, "index"), (err, res) => {
            if (err) {
                return callback(err);
            }

            callback(undefined, parseInt(res.toString()));
        });
    };

    this.loadSpecificBlock = function (blockNumber, callback) {
        archive.extractFile(path.join(blocksPath, blockNumber), (err, res) => {
            if (err) {
                return callback(err);
            }

            res = JSON.parse(res.toString());
            lht.update(res.pulse, res);
            callback(undefined, res);
        });
    };

    ////////////////////////
    let observer;
    //send to callback all blocks newer then fromVSD
    this.observeNewBlocks = function (fromVSD, callback) {
        observer = callback;
    }
}

module.exports = BarHistoryStorage;