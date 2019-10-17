const AnchorVersionList = require("./utils/AnchorVersionList");
$$.asset.describe("CSBAnchor", {
    public: {
        alias: "string:key",
        digest: "string",
        versions: "object",
        authData: "array",
        dseed: "string"
    },
    init: function (alias, digest, authData, dseed) {
        this.alias = alias;
        this.digest = digest;
        this.authData = authData;
        this.dseed = dseed;
        this.versions = AnchorVersionList.createAnchorVersionList();
    },
    update: function (version) {
        this.versions.addVersion(version);
    },
    getVersion: function (hash) {
        return this.versions.getVersion(hash);
    },
    addAuthData: function (agentUid) {
        this.authData.push(agentUid);
    }
});
