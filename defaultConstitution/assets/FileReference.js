$$.asset.describe("FileReference", {
    public: {
        alias: "string:key",
        encryptionKey: "string",
        barMapDigest: "string"
    },
    init: function (alias, encryptionKey, barMapDigest) {
        this.alias = alias;
        this.encryptionKey = encryptionKey;
        this.barMapDigest = barMapDigest;
    }
});