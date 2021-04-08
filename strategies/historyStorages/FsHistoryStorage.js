const LatestHashTracker = require("./LatestHashTracker");

function FsHistoryStorage(folder) {
    const blocksPath = folder + "/blocks";
    let lht = new LatestHashTracker();
    this.getHashLatestBlock = lht.getHashLatestBlock;

    let fs = require("fs");
    let latestPulse = -1;

    let currentBlockNumber = 0;

    this.appendBlock = function (block, announceFlag, callback) {
        ensureBlocksPathExist((err) => {
            if (err) {
                return callback(err);
            }

            fs.writeFile(blocksPath + "/" + block.pulse, JSON.stringify(block, null, 1), (err) => {
                if (err) {
                    return callback(err);
                }

                if (block.pulse > latestPulse) {
                    latestPulse = block.pulse;

                    fs.writeFile(blocksPath + "/index", latestPulse.toString(), (err) => {
                        if (err) {
                            return callback(err);
                        }

                        lht.update(block.pulse, block);
                        callback();
                    });
                } else {
                    callback();
                }
            });
        });
    };

    this.getLatestBlockNumber = function (callback) {
        ensureBlocksPathExist((err) => {
            if (err) {
                return callback(err);
            }

            fs.readFile(blocksPath + "/index", function (err, res) {
                let maxBlockNumber = 0;
                if (err) {
                    callback(err);
                } else {
                    maxBlockNumber = parseInt(res);
                    callback(null, maxBlockNumber);
                }
            });
        });
    };

    this.loadNextBlocks = function (onBlockLoaded, onBlocksFinished) {
        ensureBlocksPathExist((err) => {
            if (err) {
                return onBlocksFinished(err);
            }

            fs.readdir(blocksPath, (err, existingBlockFiles) => {
                if (err) {
                    return onBlocksFinished(err);
                }

                existingBlockFiles = existingBlockFiles
                    .filter((file) => file !== "index")
                    .map((file) => parseInt(file, 10))
                    .filter((x) => !isNaN(x));
                existingBlockFiles.sort();

                const blocksToRead = existingBlockFiles.filter((blockNumber) => blockNumber >= currentBlockNumber);
                if (!blocksToRead.length) {
                    return onBlocksFinished();
                }

                const readNextFile = function () {
                    const blockNumber = blocksToRead.shift();
                    fs.readFile(`${blocksPath}/${blockNumber}`, "utf8", function (err, res) {
                        if (err) {
                            onBlockLoaded(err, null);
                        } else {
                            try {
                                res = JSON.parse(res);
                                lht.update(res.pulse, res);
                                onBlockLoaded(null, res);
                                currentBlockNumber = blockNumber + 1;
                            } catch (e) {
                                console.log("could not parse", e, res);
                                onBlockLoaded(e);
                            }
                        }

                        if (!blocksToRead.length) {
                            return onBlocksFinished();
                        }

                        readNextFile();
                    });
                };

                readNextFile();
            });
        });
    };

    this.setCurrentBlockNumber = function (blockNumber) {
        currentBlockNumber = blockNumber;
    };

    ////////////////////////
    let observer;
    //send to callback all blocks newer then fromVSD
    this.observeNewBlocks = function (fromVSD, callback) {
        observer = callback;
    };

    //------------------------------------------- internal methods ----------------------------------------------------
    function ensureBlocksPathExist(callback) {
        fs.access(blocksPath, (err) => {
            if (err) {
                fs.mkdir(blocksPath, { recursive: true }, callback);
            } else {
                callback();
            }
        });
    }
}

module.exports = FsHistoryStorage;
