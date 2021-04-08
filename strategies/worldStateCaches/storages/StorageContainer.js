const mc = require("../../../moduleConstants");

function StorageContainer() {
    this.pskdb = {};
    this.keys = {};
    this.pulse = 0;
    let self = this;
    let latestState = {};

    this.readKey = function (key) {
        return self.keys[key];
    };

    this.writeKey = function (key, value) {
        self.keys[key] = value;
    };

    function updateAlias(assetType, alias, swarmId) {
        let keyName = assetType + mc.ALIASES;
        let value = self.readKey(keyName);
        if (value === undefined) {
            value = {};
            value[alias] = swarmId;
        } else {
            value = JSON.parse(value);
            value[alias] = swarmId;
        }
        self.writeKey(keyName, JSON.stringify(value));
    }

    this.updateAliases = function (aliases) {
        for (let swarmId in aliases) {
            updateAlias(aliases[swarmId].assetType, aliases[swarmId].alias, swarmId);
        }
    };
}

module.exports = StorageContainer;
