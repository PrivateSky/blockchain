const csbSecurityContext = require("security-context").createSecurityContext("CSBSecurityContext");
$$.asset.describe("BarAnchor", {
    public: {
        mountPoint: "string",
        barMapDigest: "string",
        readList: "array", //encrypted seeds with public keys
        writeList: "array", //agentIds
    },
    init: function (mountPoint, barMapDigest, lseed) {
        this.mountPoint = mountPoint;
        this.barMapDigest = barMapDigest;
        this.lseed = lseed;
    },
    updateReadList: function (encSeed) {
        if (!this.readList) {
            this.readList = csbSecurityContext.createEncryptedSecretList();
        }
        this.readList.addEncryptedSecret(encSeed);
    },
    updateWriteList: function (agentId) {
        if (!this.writeList) {
            this.writeList = csbSecurityContext.createAgentList();
        }

        this.writeList.addAgent(agentId);
    }
});