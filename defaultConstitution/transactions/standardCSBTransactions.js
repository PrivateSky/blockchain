$$.transaction.describe("StandardCSBTransactions", {
    addBarAnchor: function (mountPoint, barMapDigest) {
        this.transaction.createAsset("BarAnchor", "init", mountPoint, barMapDigest);
        this.commit();
    },

    addFileAnchor: function (alias, digest) {
        this.transaction.createAsset("FileAnchor", "init", alias, digest);
        this.commit();
    },

    updateFileDigest: function (alias, digest) {
        const file = this.transaction.lookup("FileAnchor", alias);
        file.digest = digest;
        this.transaction.add(file);
        this.transaction.commit();
    }
});