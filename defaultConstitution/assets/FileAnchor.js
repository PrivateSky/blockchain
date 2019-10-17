const AnchorVersionList = require("./utils/AnchorVersionList");

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
        this.versions = AnchorVersionList.createAnchorVersionList();
    },
    update: function (version) {
        this.versions.addVersion(version);
    },
    getVersion: function (hash) {
        return this.versions.getVersion(hash);
    }
});