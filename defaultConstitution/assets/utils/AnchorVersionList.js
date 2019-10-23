function AnchorVersionList() {
    this.versionList = [];

    this.addVersion = function (version) {
        this.versionList.push(version);
    };

    this.getVersion = function (hash) {
        this.versionList.find(version => version.hash === hash);
    };
}

module.exports = {
    createAnchorVersionList(){
        return new AnchorVersionList();
    }
};

