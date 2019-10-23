$$.asset.describe("BarAnchor", {
    public: {
        mountPoint: "string",
        barMapDigest: "string",
        readList: "array",//encrypted seeds with public keys
        writeList: "array"//encrypted seed with public keys
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
    updateWriteList: function (encryptedSeed) {
        if (!this.writeList) {
            this.writeList = [];
        }

        this.writeList.push(encryptedSeed);
    }
});