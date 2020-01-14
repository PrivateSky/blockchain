$$.asset.describe("FileAnchor", {
    public: {
        alias: "string",
        digest: "string", //csb digest after file addition
        readList: "array", //encrypted seeds with public keys
        writeList: "array", //agentIds
    },
    init: function (alias, digest) {
        this.alias = alias;
        this.digest = digest;
    }
});