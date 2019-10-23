const AnchorVersionList = require("./utils/AnchorVersionList");

$$.asset.describe("FileAnchor", {
    public: {
        alias: "string:key",
        digest: "string",
    },
    init: function (alias, digest) {
        this.alias = alias;
        this.digest = digest;
    },
    update: function (version) {
        this.versions.addVersion(version);
    },
    getVersion: function (hash) {
        return this.versions.getVersion(hash);
    }
});