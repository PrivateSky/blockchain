function AnchorVersionList(versionList) {
    versionList = versionList || [];

    this.addVersion = function (version) {
        versionList.push(version);
    };

    this.getVersion = function (hash) {
        return versionList.find(version => version.hash === hash);
    };
}

module.exports = {
    createAnchorVersionList(versionList){
        return new AnchorVersionList(versionList);
    }
};

