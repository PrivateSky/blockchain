$$.asset.describe("BarAnchor", {
    public: {
        alias: "string",
        mountPoint: "string",
        barMapDigest: "string",
        readList: "array", //encrypted seeds with public keys
        writeList: "array", //agentIds
    },
    init: function (mountPoint, barMapDigest) {
        this.mountPoint = mountPoint;
        this.barMapDigest = barMapDigest;
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