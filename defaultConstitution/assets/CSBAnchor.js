$$.asset.describe("CSBAnchor", {
    public: {
        alias: "string:key",
        dseed: "string",
        digest: "string"
    },
    init: function (alias, seed, dseed, digest) {
        this.alias = alias;
        this.seed = seed;
        this.dseed = dseed;
        this.digest = digest;
    }
});
