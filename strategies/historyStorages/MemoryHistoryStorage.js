const LatestHashTracker = require("./LatestHashTracker");

function MemoryHistoryStorage() {
    let blocks = [];
    let lht = new LatestHashTracker();
    this.getHashLatestBlock = lht.getHashLatestBlock;

    let currentBlockNumber = 0;

    this.appendBlock = function (block, announceFlag, callback) {
        blocks.push(block);
        lht.update(blocks.length, block);
        callback(null, block);
    };

    this.getLatestBlockNumber = function (callback) {
        callback(null, blocks.length);
    };

    this.loadNextBlocks = function (onBlockLoaded, onBlocksFinished) {
        while (true) {
            const currentBlock = blocks[currentBlockNumber];
            if (!currentBlock) {
                break;
            }

            lht.update(currentBlockNumber, block);
            onBlockLoaded(null, currentBlock);
            currentBlockNumber++;
        }

        onBlocksFinished();
    };

    this.setCurrentBlockNumber = function (blockNumber) {
        currentBlockNumber = blockNumber;
    };
}

module.exports = MemoryHistoryStorage;
