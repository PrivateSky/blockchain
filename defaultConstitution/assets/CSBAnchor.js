$$.asset.describe("CSBAnchor", {
    public: {
        alias: "string:key",
        dseed: "string",
        digest: "string"
    },
    init: function (alias, dseed, digest) {
        this.alias = alias;
        this.dseed = dseed;
        this.digest = digest;
    }
});
