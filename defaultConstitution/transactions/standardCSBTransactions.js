$$.transaction.describe("StandardCSBTransactions", {
    addBarAnchor: function (mountPoint, barMapDigest) {
        this.transaction.createAsset("BarAnchor", "init", mountPoint, barMapDigest);
        this.commit();
    },

    addFileAnchor: function (alias, type, seed, digest) {
        try{
            let fileAnchor = this.transaction.createAsset("FileAnchor", "init", alias, type, seed, digest);

            this.onCommit(() => {
                this.return(undefined, fileAnchor.asJSON());
            });

            this.commit();

        }catch(e) {
            this.return(e.message);
        }
    },

    domainLookup: function(alias){
        try{
            let fileAnchor = this.transaction.lookup("FileAnchor", alias);
            this.return(undefined, fileAnchor ? fileAnchor.asJSON() : "");
        }catch(err){
            this.return(err.message);
        }
    },
    updateFileDigest: function (alias, digest) {
        const file = this.transaction.lookup("FileAnchor", alias);
        file.digest = digest;
        this.transaction.add(file);
        this.transaction.commit();
    },
    getSeed: function (alias) {
        try {
            const anchor = this.transaction.lookup("FileAnchor", alias);
            this.return(undefined, anchor.seed);
        } catch (e) {
            this.return(e.message);
        }
    }
});