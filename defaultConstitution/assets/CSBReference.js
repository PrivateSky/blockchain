$$.asset.describe("CSBReference", {
    public: {
        uid: "string:key",
        seed: "string",
        dseed: "string"
    },
    init: function (uid, seed, dseed) {
        this.uid = uid;
        this.seed = seed;
        this.dseed = dseed;
    }
});
