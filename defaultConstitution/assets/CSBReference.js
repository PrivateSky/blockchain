const EncryptedDseedList = require("./utils/EncryptedDseedList");
$$.asset.describe("CSBReference", {
    public: {
        uid: "string:key",
        seed: "string",
        dseed: "string",
        encDseedList: "object"
    },
    init: function (uid, seed, dseed) {
        this.uid = uid;
        this.seed = seed;
        this.dseed = dseed;
        this.encDseedList = EncryptedDseedList.createEncryptedDseedList();
    }
});
