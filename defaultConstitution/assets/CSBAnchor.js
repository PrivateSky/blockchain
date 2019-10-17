$$.asset.describe("CSBAnchor", {
    public: {
        alias: "string:key",
        digest: "string",
        versions: "array",
        authData: "array",
        dseed: "string"
    },
    init: function (alias, digest, authData, dseed) {
        this.alias = alias;
        this.digest = digest;
        this.authData = authData;
        this.dseed = dseed;
        this.versions = [];
    },
    update: function (version) {
        this.versions.push(version);
    },
    getVersions: function () {
        return this.versions;
    },
    addAuthData: function (agentUid) {
        this.authData.push(agentUid);
    }
});
