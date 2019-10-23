$$.transaction.describe("StandardCSBTransactions", {
    addBarAnchor: function (mountPoint, barMapDigest) {
        this.transaction.createAsset("BarAnchor", "init", mountPoint, barMapDigest);
        this.commit();
    },
    addFileAnchor: function (alias, digest) {
        this.transaction.createAsset("FileAnchor", "init", alias, digest);
        this.commit();
    }
});