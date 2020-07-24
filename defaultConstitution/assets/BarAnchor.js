$$.asset.describe("BarAnchor", {
    public: {
        alias: "string",
        mountPoint: "string",
        brickMapDigest: "string",
        readList: "array", //encrypted seeds with public keys
        writeList: "array", //agentIds
    },
    init: function (mountPoint, brickMapDigest) {
        this.mountPoint = mountPoint;
        this.brickMapDigest = brickMapDigest;
    },
    updateReadList: function (encryptedSeed) {
        if (!this.readList) {
            this.readList = [];
        }
        this.readList.push(encryptedSeed);
    },
    updateWriteList: function (agentId) {
        if (!this.writeList) {
            this.writeList = [];
        }

        this.writeList.push(agentId);
    }
});