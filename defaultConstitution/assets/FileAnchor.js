$$.asset.describe("FileAnchor", {
    public: {
        alias: "string:key",
        digest: "string",
        versions: "array",
        encryptionKey: "string"
    },
    init: function (alias, barMapDigest, encryptionKey) {
        this.alias = alias;
        this.digest = barMapDigest;
        this.encryptionKey = encryptionKey;
        this.versions = [];
    },
    update: function (version) {
        this.versions.push(version);
    },
    getVersions: function () {
        return this.versions;
    }
});