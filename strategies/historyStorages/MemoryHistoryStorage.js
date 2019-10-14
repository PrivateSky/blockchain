const LatestHashTracker = require("./LatestHashTracker");

function MemoryHistoryStorage() {
    let blocks = [];
    let lht = new LatestHashTracker();
    this.getHashLatestBlock = lht.getHashLatestBlock;

    this.appendBlock = function (block, announceFlag, callback) {
        blocks.push(block);
        lht.update(blocks.length, block);
        callback(null, block);

    };

    this.getLatestBlockNumber = function (callback) {
        callback(null, blocks.length);
    };

    this.loadSpecificBlock = function (blockNumber, callback) {
        let block = blocks[blockNumber];
        lht.update(blockNumber, block);
        callback(null, blocks[blockNumber]);
    }
}

module.exports = MemoryHistoryStorage;