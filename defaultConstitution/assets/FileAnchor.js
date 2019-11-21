$$.asset.describe("FileAnchor", {
    public: {
        alias: "string",
        mountPoint: "string",
        digest: "string", //csb digest after file addition
        readList: "array", //encrypted seeds with public keys
        writeList: "array", //agentIds
    },
    init: function (mountPoint, digest) {
        this.mountPoint = mountPoint;
        this.digest = digest;
    }
});