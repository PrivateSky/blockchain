$$.asset.describe("FileAnchor", {
    public: {
        alias: "string",
        type: "string",
        digest: "string", //csb digest after file addition
        readList: "array", //encrypted seeds with public keys
        writeList: "array", //agentIds
    },
    init: function (alias, type, digest) {
        this.alias = alias;
        this.type = type;
        this.digest = digest;
    }
});

