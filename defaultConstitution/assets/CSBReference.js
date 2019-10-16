$$.asset.describe("CSBReference", {
    public: {
        alias: "string:key",
        dseed: "string"
    },
    init: function (alias, dseed) {
        this.alias = alias;
        this.dseed = dseed;
    }
});
